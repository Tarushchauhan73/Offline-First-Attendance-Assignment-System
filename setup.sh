#!/bin/bash

echo "🚀 Setting up Offline-First Attendance System"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing frontend dependencies..."
cd attendance-app
npm install

echo "📦 Installing backend dependencies..."
cd ../backend
npm install

echo "✅ Setup complete!"
echo ""
echo "To start the system:"
echo "1. Start backend: cd backend && npm start"
echo "2. Start frontend: cd attendance-app && npm run dev"
echo ""
echo "Then open http://localhost:5174 in your browser"
echo ""
echo "📱 The app will work offline once loaded!"
echo "🔄 Data syncs automatically when online."