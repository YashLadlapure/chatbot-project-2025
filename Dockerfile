# Multi-stage Docker build for chatbot-project

# Backend stage
FROM node:18-alpine AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci --only=production
COPY backend/ ./
EXPOSE 3001
CMD ["node", "server.js"]

# Frontend stage
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Production stage - Nginx to serve frontend and proxy backend
FROM nginx:alpine

# Copy frontend build
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy backend (for single container deployment)
COPY --from=backend /app/backend /app/backend

# Install Node.js for running backend in same container
RUN apk add --no-cache nodejs npm

EXPOSE 80 3001

# Start both nginx and backend
CMD sh -c "node /app/backend/server.js & nginx -g 'daemon off;'"
