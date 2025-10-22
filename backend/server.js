const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Simple echo bot implementation
    // Replace this with your actual AI integration (OpenAI, Anthropic, etc.)
    const reply = `Echo: ${message}\n\nThis is a demo response. To integrate a real AI model:\n1. Add your API key to .env file\n2. Install the AI SDK (e.g., openai)\n3. Replace this logic with actual API calls\n\n\`\`\`javascript\n// Example integration\nconst response = await openai.chat.completions.create({\n  model: 'gpt-3.5-turbo',\n  messages: [{ role: 'user', content: message }]\n});\n\`\`\``;

    res.json({ reply });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
