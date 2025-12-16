#!/bin/bash

echo "🚀 Deploying Offline-First Attendance System"
echo "============================================"

# Check if required tools are installed
command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required but not installed. Aborting."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed. Aborting."; exit 1; }

echo "📦 Building frontend..."
cd attendance-app

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

# Build the frontend
echo "Building production bundle..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed!"
    exit 1
fi

echo "✅ Frontend built successfully!"

cd ../backend

# Install backend dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
fi

echo "✅ Backend ready!"

echo ""
echo "🎯 Deployment Options:"
echo ""
echo "1. Vercel (Frontend) + Railway (Backend) - RECOMMENDED"
echo "   Frontend: cd attendance-app && npx vercel --prod"
echo "   Backend: cd backend && npx @railway/cli up"
echo ""
echo "2. Netlify (Frontend) + Render (Backend)"
echo "   Frontend: cd attendance-app && npx netlify-cli deploy --prod --dir=dist"
echo "   Backend: Deploy to render.com via GitHub"
echo ""
echo "3. Local Development:"
echo "   Backend: cd backend && npm start"
echo "   Frontend: cd attendance-app && npm run dev"
echo ""
echo "📱 Your offline-first attendance system is ready!"
echo "🌍 Perfect for rural colleges with poor connectivity!"