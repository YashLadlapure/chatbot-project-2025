# 🤖 Chatbot Project

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/YashLadlapure/chatbot-project-2025)

A modern, full-stack chatbot application featuring dark mode, syntax highlighting, and mobile responsiveness. Built with React and Express, containerized with Docker, and ready for deployment on free cloud platforms.

## 🔗 Live Demo

Check out the live demo of the chatbot project: [Live Demo](https://your-demo-url.com/)

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
- 🤖 **Gemini AI Integration** - Powered by Google's Gemini API for intelligent responses

### DevOps
- 🐳 **Docker Support** - Multi-stage Dockerfile for production
- 📦 **Containerized** - Easy deployment with Docker Compose
- ☁️ **Cloud Ready** - Deployable on free platforms (Render, Railway, Fly.io)

## 📁 Project Structure

```
chatbot-project-2025/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── App.jsx       # Main application component
│   │   └── App.css       # Styling with theme support
│   └── package.json      # Frontend dependencies
│
├── backend/               # Express backend server
│   ├── server.js         # API server implementation with Gemini AI
│   ├── .env.template     # Environment variables template
│   └── package.json      # Backend dependencies
│
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile             # Production Docker setup
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)
- Gemini API Key (get from https://makersuite.google.com/app/apikey)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashLadlapure/chatbot-project-2025.git
   cd chatbot-project-2025
   ```

2. **Set up Backend**
   ```bash
   cd backend
   npm install
   
   # Create .env file from template
   cp .env.template .env
   
   # Edit .env and add your GEMINI_API_KEY
   # GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Set up Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Run the development servers**
   
   Terminal 1 (Backend):
   ```bash
   cd backend
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   - Application: http://localhost

## 🌐 Deployment Options

### Option 1: Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set the build command: `npm install && npm run build`
4. Set the start command: `npm start`
5. Add environment variables if needed

### Option 2: Railway
1. Create a new project
2. Connect your GitHub repository
3. Railway will auto-detect your setup
4. Deploy with one click

### Option 3: Fly.io
1. Install flyctl CLI
2. Run `fly launch`
3. Follow the prompts
4. Deploy with `fly deploy`

### Option 4: Vercel (Frontend only)
1. Import your GitHub repository
2. Set the framework preset to Vite
3. Deploy automatically

## 📋 Backend/API Deployment Notes

### Environment Setup for Cloud Hosting

When deploying to cloud platforms (Vercel, Render, Railway, etc.), follow these steps:

#### 1. Backend Deployment

**For Render/Railway/Fly.io:**
- Deploy the backend as a separate service
- Set environment variables in the platform dashboard:
  - `GEMINI_API_KEY`: Your Google Gemini API key (required)
  - `PORT`: Will be auto-assigned by most platforms
  - `CORS_ORIGIN`: Set to your frontend URL (e.g., https://your-app.vercel.app)

**Backend Setup Checklist:**
- ✅ Copy `.env.template` to `.env` locally for development
- ✅ Never commit your actual `.env` file with real API keys
- ✅ Set `GEMINI_API_KEY` in your hosting platform's environment variables
- ✅ Update `CORS_ORIGIN` to match your frontend deployment URL
- ✅ Test the `/health` endpoint to verify backend is running
- ✅ Test the `/api/chat` endpoint with a sample message

#### 2. Frontend Deployment

**For Vercel/Netlify:**
- Deploy the frontend separately
- Set the `VITE_API_URL` environment variable:
  - Local development: `http://localhost:3001`
  - Production: Your backend URL (e.g., `https://your-backend.onrender.com`)

**Frontend Setup Checklist:**
- ✅ Set `VITE_API_URL` environment variable in Vercel/Netlify dashboard
- ✅ Ensure the backend URL is accessible (CORS configured)
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`

#### 3. Full-Stack Deployment Examples

**Example 1: Vercel (Frontend) + Render (Backend)**
```bash
# Render (Backend)
- Repository: Select backend folder
- Build Command: npm install
- Start Command: npm start
- Environment Variables:
  - GEMINI_API_KEY=your_key_here
  - CORS_ORIGIN=https://your-app.vercel.app

# Vercel (Frontend)
- Root Directory: frontend
- Framework Preset: Vite
- Environment Variables:
  - VITE_API_URL=https://your-backend.onrender.com
```

**Example 2: Railway (Full-Stack)**
```bash
# Create two services in one project:
# Service 1: Backend
  - Root: /backend
  - Environment: Add GEMINI_API_KEY
  
# Service 2: Frontend  
  - Root: /frontend
  - Environment: Add VITE_API_URL pointing to backend service
```

#### 4. API Key Management

**Getting Your Gemini API Key:**
1. Visit https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and store it securely
5. **Never commit API keys to your repository**

**Security Best Practices:**
- Use `.env.template` as a reference (committed to repo)
- Keep actual `.env` in `.gitignore` (never committed)
- Set API keys only in hosting platform environment variables
- Rotate API keys periodically for security
- Monitor API usage in Google AI Studio

## 🛠️ Configuration

### Environment Variables

**Backend (.env)**
```env
PORT=3000
CORS_ORIGIN=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key_here
```

**Frontend (Optional)**
```env
VITE_API_URL=http://localhost:3000
```

## 📚 API Documentation

### Endpoints

#### POST /api/chat
Send a message to the chatbot

**Request:**
```json
{
  "message": "Hello, chatbot!"
}
```

**Response:**
```json
{
  "reply": "Hi! I'm here to help. What can I do for you today?"
}
```

#### GET /health
Check server health status

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-01-20T12:00:00.000Z"
}
```

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

## 🧪 Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Change the PORT in your .env file
   - Kill the process using the port: `lsof -ti:3000 | xargs kill`

2. **CORS errors**
   - Ensure CORS_ORIGIN in backend .env matches your frontend URL
   - Check that the backend is running

3. **Docker build fails**
   - Clear Docker cache: `docker system prune -a`
   - Rebuild: `docker-compose up --build --force-recreate`

4. **Gemini API errors**
   - Verify your API key is correct
   - Check API key is set in environment variables
   - Ensure you have API quota available
   - Visit https://makersuite.google.com to check API status

## 🔒 Security

- Keep dependencies updated
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement rate limiting for API endpoints
- Never commit API keys or secrets
- Use `.env.template` for reference, not actual credentials

## 🚧 Best Practices

1. **Performance**
   - Minimize bundle size
   - Implement lazy loading for large components
   - Use production builds for deployment

2. **Security**
   - Sanitize user inputs
   - Use HTTPS in production
   - Keep dependencies updated

3. **Code Quality**
   - Follow ESLint rules
   - Use consistent code formatting
   - Write meaningful commit messages

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Axios, React Markdown, React Syntax Highlighter
- **Backend**: Node.js, Express, CORS, Dotenv, Google Gemini AI
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
