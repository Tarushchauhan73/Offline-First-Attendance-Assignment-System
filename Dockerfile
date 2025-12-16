# Multi-stage Docker build for Offline-First Attendance System

# Stage 1: Build the frontend
FROM node:18-alpine AS frontend-build

WORKDIR /app/attendance-app

# Copy package files
COPY attendance-app/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY attendance-app/ ./

# Build the application
RUN npm run build

# Stage 2: Setup the backend
FROM node:18-alpine AS backend-setup

WORKDIR /app/backend

# Copy package files
COPY backend/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy backend source
COPY backend/ ./

# Stage 3: Production image
FROM node:18-alpine AS production

# Install serve for serving static files
RUN npm install -g serve

# Create app directory
WORKDIR /app

# Copy built frontend from frontend-build stage
COPY --from=frontend-build /app/attendance-app/dist ./frontend

# Copy backend from backend-setup stage
COPY --from=backend-setup /app/backend ./backend

# Create a startup script
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'cd /app/backend && node server.js &' >> /app/start.sh && \
    echo 'cd /app/frontend && serve -s . -l 3000' >> /app/start.sh && \
    chmod +x /app/start.sh

# Expose ports
EXPOSE 3001 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/api/health || exit 1

# Start both services
CMD ["/app/start.sh"]