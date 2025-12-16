# 🎓 Offline-First Attendance System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-orange.svg)](https://web.dev/progressive-web-apps/)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/yourusername/Offline-First-Attendance-Assignment-System/ci-cd.yml)](https://github.com/yourusername/Offline-First-Attendance-Assignment-System/actions)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/Offline-First-Attendance-Assignment-System)](https://github.com/yourusername/Offline-First-Attendance-Assignment-System/issues)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/Offline-First-Attendance-Assignment-System)](https://github.com/yourusername/Offline-First-Attendance-Assignment-System/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/Offline-First-Attendance-Assignment-System)](https://github.com/yourusername/Offline-First-Attendance-Assignment-System/network)

> **Perfect for rural colleges with poor internet connectivity!** 🌍

A Progressive Web App (PWA) designed for rural colleges and areas with poor internet connectivity. Teachers can take attendance offline and sync data when internet becomes available.

## ✨ Features

🆕 **Offline-First**: Works completely offline using IndexedDB for local storage
📱 **PWA Ready**: Installable on mobile devices and desktops
🔄 **Auto-Sync**: Automatically syncs data when internet connection is restored
👨‍🏫 **Teacher-Friendly**: Simple interface for taking attendance
📊 **Class Management**: Create classes and manage students
📅 **Date-Based Attendance**: Track attendance by date with present/absent/late status
🎯 **Mobile Optimized**: Touch-friendly interface for tablets and phones

## 🌟 Perfect For

- ✅ **Rural colleges** with poor connectivity
- ✅ **Field trips** and outdoor activities
- ✅ **Emergency situations** (power outages)
- ✅ **Remote teaching** scenarios
- ✅ **Mobile teachers** on the go
- ✅ **Backup systems** for existing software

## 🚀 Quick Start (5 minutes)

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/Offline-First-Attendance-Assignment-System.git
cd Offline-First-Attendance-Assignment-System

# Install dependencies
cd attendance-app && npm install
cd ../backend && npm install
```

### Run Locally
```bash
# Terminal 1: Start Backend Server
cd backend
npm start

# Terminal 2: Start Frontend App
cd attendance-app
npm run dev
```

### Open App
Go to: **http://localhost:5173**

## 📱 Usage

### For Teachers
1. **Select a class** from the main screen
2. **Click "Take Attendance"**
3. **Mark students**: Present/Absent/Late
4. **Save** - works offline!

### Offline Magic
- **Works without internet** - all data stored locally
- **Status indicator**: 🟢 Online (syncing) / 🔴 Offline (local only)
- **Auto-sync**: Data uploads automatically when internet returns

### Mobile Usage
- Open in Chrome/Safari on phone
- Click "Add to Home Screen"
- Works like a native app!

## 🏗️ Project Structure

```
├── attendance-app/          # React PWA Frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── db.ts           # IndexedDB utilities
│   │   ├── sync.ts         # Auto-sync functionality
│   │   └── App.tsx         # Main app component
│   ├── package.json
│   └── vite.config.ts
├── backend/                # Express.js sync server
│   ├── server.js
│   └── package.json
├── docker-compose.yml      # Docker deployment
├── Dockerfile             # Container configuration
└── docs/                  # Documentation
```

## 🚀 Deployment

### Quick Deploy (Recommended)
```bash
# Frontend: Vercel/Netlify
# Backend: Railway/Render
./deploy.sh
```

### Docker Deployment
```bash
docker-compose up -d
```

### Manual Deploy
```bash
cd attendance-app && npm run build
# Deploy dist/ folder to any static hosting
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **IndexedDB** - Local storage
- **Tailwind CSS** - Styling

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin support

### Deployment
- **Docker** - Containerization
- **Nginx** - Web server
- **PM2** - Process management

## 📚 Documentation

- **[USAGE.md](USAGE.md)** - Complete usage guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment instructions
- **[API.md](API.md)** - Backend API documentation

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
```bash
# Fork and clone
git clone https://github.com/yourusername/Offline-First-Attendance-Assignment-System.git

# Install dependencies
cd attendance-app && npm install
cd ../backend && npm install

# Start development
npm run dev
```

### Issues & Feature Requests
- [Bug Reports](https://github.com/yourusername/Offline-First-Attendance-Assignment-System/issues/new?template=bug_report.md)
- [Feature Requests](https://github.com/yourusername/Offline-First-Attendance-Assignment-System/issues/new?template=feature_request.md)

## � Repository Features

- 🔄 **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions
- 📦 **Dependabot**: Automated dependency updates
- 🐛 **Issue Templates**: Structured bug reports and feature requests
- 🤝 **Code of Conduct**: Community guidelines for respectful collaboration
- 🔒 **Security Policy**: Guidelines for reporting security vulnerabilities
- 📝 **Changelog**: Version history and release notes
- 🎯 **VS Code Config**: Recommended extensions and settings for contributors

## �📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for rural colleges facing connectivity challenges
- Inspired by the need for reliable offline educational tools
- Thanks to the open-source community for amazing tools

## 📞 Support

- 📧 **Email**: tarushchauhan73@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/Offline-First-Attendance-Assignment-System/issues)
- 📖 **Docs**: [Full Documentation](https://github.com/yourusername/Offline-First-Attendance-Assignment-System/wiki)

---

**🎉 Ready to transform attendance taking in rural colleges!**

**Built with ❤️ for education in challenging environments**

## 🚀 Quick Usage (5 minutes)

### 1. Start the System
```bash
# Install dependencies
cd attendance-app && npm install
cd ../backend && npm install

# Start servers
# Terminal 1: cd backend && npm start
# Terminal 2: cd attendance-app && npm run dev
```

### 2. Open: http://localhost:5173

### 3. Take Attendance
1. **Select a class** (demo data loads automatically)
2. **Click "Take Attendance"**
3. **Mark students**: Present/Absent/Late
4. **Save** - works offline!

### 4. Test Offline Mode
- Disconnect internet → Status shows 🔴 Offline
- Take attendance → Works perfectly!
- Reconnect → Status shows 🟢 Online, data syncs automatically

See [USAGE.md](USAGE.md) for detailed instructions.

## Project Structure

```
├── attendance-app/          # React PWA Frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── db.ts           # IndexedDB utilities
│   │   ├── sync.ts         # Auto-sync functionality
│   │   └── App.tsx         # Main app component
│   ├── package.json
│   └── vite.config.ts      # PWA configuration
├── backend/                # Express.js sync server
│   ├── server.js
│   └── package.json
└── README.md
```

## Quick Start

### 1. Install Dependencies

```bash
# Frontend
cd attendance-app
npm install

# Backend
cd ../backend
npm install
```

### 2. Start the Backend Server

```bash
cd backend
npm start
```

### 3. Start the Frontend

```bash
cd attendance-app
npm run dev
```

### 4. Open in Browser

Navigate to `http://localhost:5173` (or the port shown by Vite)

## Deployment

### 🚀 Quick Deploy Options

#### Option 1: Vercel (Frontend) + Railway (Backend) - RECOMMENDED
```bash
# Frontend
cd attendance-app
npm install -g vercel
vercel --prod

# Backend
cd ../backend
npm install -g @railway/cli
railway login
railway init
railway up
```

#### Option 2: Docker Deployment
```bash
# Using Docker Compose (easiest)
docker-compose up -d

# Or single container
docker build -t attendance-system .
docker run -p 3001:3001 -p 3000:3000 attendance-system
```

#### Option 3: Netlify (Frontend) + Render (Backend)
- Frontend: Connect GitHub repo to Netlify
- Backend: Connect GitHub repo to Render.com

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Usage

1. **Add Classes**: Create your courses/subjects
2. **Add Students**: Add students to each class
3. **Take Attendance**: Select a class and mark attendance for any date
4. **Offline Operation**: Everything works without internet
5. **Auto-Sync**: Data syncs automatically when online

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Storage**: IndexedDB (via idb library)
- **PWA**: Vite PWA plugin
- **Backend**: Node.js + Express
- **Styling**: CSS with modern design

## Development

### Frontend Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend Commands
- `npm start` - Start production server
- `npm run dev` - Start with nodemon for development

## Deployment

### Frontend (PWA)
The app can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

### Backend
Deploy the Express server to:
- Heroku
- Railway
- Render
- DigitalOcean App Platform

## Browser Support

Works on all modern browsers that support:
- IndexedDB
- Service Workers
- ES6 Modules

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test offline functionality
5. Submit a pull request

## License

MIT License - feel free to use for educational institutions.