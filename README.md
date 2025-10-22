# 🤖 Chatbot Project
[![GitHub](https://img.shields.io/badge/GitHub-chatbot--project--2025-blue?logo=github)](https://github.com/YashLadlapure/chatbot-project-2025)

A modern, full-stack chatbot application featuring dark mode, syntax highlighting, and mobile responsiveness. Built with React and Express, containerized with Docker, and ready for deployment on free cloud platforms.

## 🔗 Live Demo

Check out the live demo of the chatbot project: [Live Demo](https://your-demo-url.com)

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
├── docker-compose.yml      # Docker Compose configuration
├── Dockerfile             # Production Docker setup
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashLadlapure/chatbot-project-2025.git
   cd chatbot-project-2025
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Run the development servers**
   
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

4. **Access the application**
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

## 🛠️ Configuration

### Environment Variables

**Backend (.env)**
```env
PORT=3000
CORS_ORIGIN=http://localhost:5173
```

**Frontend (if needed)**
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

## 🔒 Security

- Keep dependencies updated
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement rate limiting for API endpoints

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
