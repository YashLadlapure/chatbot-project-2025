# 🤖 Chatbot Project

[![GitHub](https://img.shields.io/badge/GitHub-chatbot--project--2025-blue?logo=github)](https://github.com/YashLadlapure/chatbot-project-2025)

A modern, full-stack chatbot application featuring dark mode, syntax highlighting, and mobile responsiveness. Built with React and Express, containerized with Docker, and ready for deployment on free cloud platforms.

## ✨ Features

### Frontend
- 🎨 **Dark Mode Support** - Toggle between light and dark themes
- 💻 **Syntax Highlighting** - Beautiful code highlighting using react-syntax-highlighter
- 📱 **Mobile Responsive** - Optimized for all screen sizes
- ⚡ **Fast & Modern** - Built with React 18 and Vite
- 📝 **Markdown Support** - Rich text formatting with react-markdown

### Backend
- 🚀 **Express.js Server** - Fast and lightweight Node.js backend
- 🔌 **RESTful API** - Clean API endpoints for chat functionality
- 🛡️ **CORS Enabled** - Cross-origin resource sharing configured
- 📊 **Health Check Endpoint** - Monitor server status
- 🔧 **Environment Variables** - Secure configuration management

### DevOps
- 🐳 **Docker Support** - Multi-stage Dockerfile for production
- 📦 **Containerized** - Easy deployment with Docker Compose
- ☁️ **Cloud Ready** - Deployable on free platforms (Render, Railway, Fly.io)

## 📁 Project Structure

```
chatbot-project-2025/
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── App.jsx        # Main application component
│   │   └── App.css        # Styling with theme support
│   └── package.json       # Frontend dependencies
│
├── backend/                # Express backend server
│   ├── server.js          # API server implementation
│   └── package.json       # Backend dependencies
│
├── Dockerfile             # Multi-stage Docker build
├── docker-compose.yml     # Container orchestration (to be added)
├── nginx.conf             # Nginx configuration (to be added)
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Docker (optional, for containerized deployment)

### Local Development

#### 1. Clone the Repository
```bash
git clone https://github.com/YashLadlapure/chatbot-project-2025.git
cd chatbot-project-2025
```

#### 2. Setup Backend
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:3001
```

#### 3. Setup Frontend (in a new terminal)
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

#### 4. Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=3001
# Add your AI API keys here
# OPENAI_API_KEY=your_key_here
```

## 🐳 Docker Deployment

### Build and Run
```bash
# Build the Docker image
docker build -t chatbot-app .

# Run the container
docker run -p 80:80 -p 3001:3001 chatbot-app
```

Access the application at `http://localhost`

## ☁️ Cloud Deployment

### Deploy on Render (Free)

#### Backend:
1. Create a new **Web Service** on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add your API keys

#### Frontend:
1. Create a new **Static Site** on Render
2. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variable**: `VITE_API_URL=your-backend-url`

### Deploy on Railway (Free)

1. Install [Railway CLI](https://docs.railway.app/develop/cli)
2. Run:
```bash
railway login
railway init
railway up
```

### Deploy on Fly.io (Free)

1. Install [flyctl](https://fly.io/docs/hands-on/install-flyctl/)
2. Run:
```bash
fly auth login
fly launch
fly deploy
```

### Deploy on Vercel (Frontend) + Render (Backend)

#### Frontend on Vercel:
```bash
cd frontend
npm install -g vercel
vercel
```

#### Backend on Render (as above)

## 🔧 Configuration

### Frontend Environment Variables
Create `frontend/.env`:
```env
VITE_API_URL=http://localhost:3001
```

### Backend Environment Variables
Create `backend/.env`:
```env
PORT=3001
NODE_ENV=production
# Add your AI service API keys
```

## 🎨 Customization

### Theme Colors
Edit `frontend/src/App.css` to customize colors:
```css
:root {
  --bg-light: #ffffff;
  --text-light: #333333;
  --msg-user-light: #007bff;
  /* ... more variables */
}
```

### AI Integration
Replace the echo bot in `backend/server.js` with your preferred AI service:
- OpenAI GPT
- Anthropic Claude
- Cohere
- Hugging Face models

Example (OpenAI):
```javascript
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: req.body.message }]
  });
  res.json({ reply: response.choices[0].message.content });
});
```

## 📊 API Endpoints

### Health Check
```
GET /health
Response: { "status": "healthy", "timestamp": "ISO-8601" }
```

### Chat
```
POST /api/chat
Body: { "message": "Your message here" }
Response: { "reply": "Bot response" }
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📝 Best Practices

1. **Security**
   - Never commit `.env` files
   - Use environment variables for sensitive data
   - Implement rate limiting in production

2. **Performance**
   - Enable caching for static assets
   - Implement lazy loading for large components
   - Use production builds for deployment

3. **Code Quality**
   - Follow ESLint rules
   - Use consistent code formatting
   - Write meaningful commit messages

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Axios, React Markdown, React Syntax Highlighter
- **Backend**: Node.js, Express, CORS, Dotenv
- **Styling**: CSS3 with CSS Variables
- **Containerization**: Docker, Multi-stage builds
- **Deployment**: Render, Railway, Fly.io, Vercel

## 📄 License

MIT License - feel free to use this project for learning or production!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

⭐ **Star this repository if you find it helpful!**
