# 🤖 Chatbot Project

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/YashLadlapure/chatbot-project-2025)

A modern, full-stack chatbot application featuring dark mode, syntax highlighting, and mobile responsiveness. Built with React (Vite) frontend and Vercel Serverless Functions backend powered by Google Gemini AI.

## 🔗 Live Demo

Check out the live demo of the chatbot project: [Live Demo](https://chatbot-project-2025.vercel.app/)

## ✨ Features

### Frontend
- 🎨 **Dark Mode Support** - Toggle between light and dark themes
- 💻 **Syntax Highlighting** - Beautiful code highlighting using react-syntax-highlighter
- 📱 **Mobile Responsive** - Optimized for all screen sizes
- ⚡ **Fast & Modern** - Built with React 18 and Vite
- 📝 **Markdown Support** - Rich text formatting with react-markdown

### Backend
- 🚀 **Vercel Serverless Functions** - Scalable serverless API
- 🤖 **Gemini AI Integration** - Powered by Google's Gemini API for intelligent responses
- 🔌 **RESTful API** - Clean API endpoint at `/api/chat`
- 🔧 **Environment Variables** - Secure configuration management
- ⚡ **Auto-scaling** - Automatically scales with demand

### DevOps
- ☁️ **Vercel Deployment** - One-click deployment to Vercel
- 📦 **Optimized Build** - Fast builds with Vite
- 🔄 **Auto-deployment** - Git push triggers automatic deployment

## 📁 Project Structure

```
chatbot-project-2025/
├── api/                   # Vercel Serverless Functions
│   └── chat.js           # Gemini AI chat endpoint (ESM)
├── frontend/             # React frontend application
│   ├── src/
│   │   ├── App.jsx       # Main application component
│   │   └── App.css       # Styling with theme support
│   └── package.json      # Frontend dependencies
├── .env.template         # Environment variables template
├── vercel.json          # Vercel deployment configuration
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key (get one at [Google AI Studio](https://makersuite.google.com/app/apikey))

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashLadlapure/chatbot-project-2025.git
   cd chatbot-project-2025
   ```

2. **Set up environment variables**
   ```bash
   # Copy the template
   cp .env.template .env
   
   # Edit .env and add your Gemini API key
   # GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Run the development server**
   ```bash
   # For full-stack development with Vercel CLI (recommended)
   npm install -g vercel
   vercel dev
   
   # OR run frontend only
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000 (with Vercel CLI)
   - Or: http://localhost:5173 (frontend only)

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect the configuration from `vercel.json`
5. Add environment variable:
   - Go to Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key
   - Select "Production", "Preview", and "Development"
6. Deploy!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Add environment variable**
   ```bash
   vercel env add GEMINI_API_KEY
   ```

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## 🛠️ Configuration

### Environment Variables

**Root `.env` (for local development)**
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**Vercel Environment Variables (for production)**
Add these in Vercel Dashboard → Project Settings → Environment Variables:
- `GEMINI_API_KEY` - Your Google Gemini API key

### API Configuration

The serverless function at `/api/chat.js` handles POST requests:

**Endpoint**: `POST /api/chat`

**Request Body**:
```json
{
  "message": "Your message here"
}
```

**Response**:
```json
{
  "reply": "AI-generated response"
}
```

**Error Response**:
```json
{
  "error": "Error message",
  "details": "Detailed error information"
}
```

## 📚 API Documentation

### Serverless Function: `/api/chat.js`

This serverless function uses ESM (ES Modules) syntax and integrates with Google's Gemini AI.

**Features**:
- ESM module syntax (`import`/`export default`)
- Input validation
- Error handling
- Gemini Pro model integration

**Environment Requirements**:
- Node.js 18+ runtime (configured via Vercel)
- `@google/generative-ai` package

## 🎨 Customization

### Theme Colors

Edit `frontend/src/App.css` to customize the theme:

```css
:root {
  --primary-color: #007bff;
  --background: #ffffff;
  --text: #333333;
}

[data-theme="dark"] {
  --background: #1a1a1a;
  --text: #ffffff;
}
```

### Gemini Model

To use a different Gemini model, edit `api/chat.js`:

```javascript
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
// Change to: "gemini-1.5-pro", "gemini-1.5-flash", etc.
```

## 🐛 Troubleshooting

### Common Issues

1. **API key not configured**
   - Ensure `GEMINI_API_KEY` is set in Vercel Environment Variables
   - For local dev, check your `.env` file exists and contains the key

2. **CORS errors**
   - Vercel automatically handles CORS for `/api/*` routes
   - Check that your frontend is making requests to the correct API endpoint

3. **Function timeout**
   - Vercel serverless functions have a 10-second timeout on free tier
   - For longer responses, consider upgrading your Vercel plan

4. **Build fails**
   - Ensure all dependencies are listed in `frontend/package.json`
   - Check that `vercel.json` configuration is correct

## 🔒 Security

- ✅ API keys stored as environment variables (never committed to Git)
- ✅ `.gitignore` prevents accidental commit of `.env` files
- ✅ Input validation in serverless function
- ✅ Error messages don't expose sensitive information
- ⚠️ Add rate limiting for production use
- ⚠️ Consider implementing authentication for production

## 🚧 Best Practices

1. **Performance**
   - Use production builds for deployment
   - Minimize bundle size with code splitting
   - Implement lazy loading for components

2. **Security**
   - Never commit API keys or secrets
   - Sanitize user inputs
   - Use HTTPS (Vercel provides this automatically)
   - Keep dependencies updated

3. **Code Quality**
   - Follow ESLint rules
   - Use consistent code formatting
   - Write meaningful commit messages

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Axios, React Markdown, React Syntax Highlighter
- **Backend**: Vercel Serverless Functions, Google Gemini AI, ESM
- **Styling**: CSS3 with CSS Variables
- **Deployment**: Vercel (with automatic Git integration)

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
