# 🤝 Contributing to Offline-First Attendance System

Thank you for your interest in contributing to the Offline-First Attendance System! This project aims to help rural colleges with poor connectivity manage attendance effectively.

## 📋 How to Contribute

### 🐛 Reporting Bugs
- Use the [Bug Report Template](https://github.com/Tarushchauhan73/Offline-First-Attendance-Assignment-System/issues/new?template=bug_report.md)
- Include detailed steps to reproduce
- Mention your browser, OS, and Node.js version
- Add screenshots if applicable

### 💡 Feature Requests
- Use the [Feature Request Template](https://github.com/Tarushchauhan73/Offline-First-Attendance-Assignment-System/issues/new?template=feature_request.md)
- Describe the problem you're trying to solve
- Explain why this feature would be useful for rural colleges

### 🛠️ Code Contributions

#### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/your-username/Offline-First-Attendance-Assignment-System.git
cd Offline-First-Attendance-Assignment-System

# Install dependencies
cd attendance-app && npm install
cd ../backend && npm install

# Start development servers
# Terminal 1: cd backend && npm start
# Terminal 2: cd attendance-app && npm run dev
```

#### Making Changes
1. **Create a feature branch**: `git checkout -b feature/your-feature-name`
2. **Make your changes** following the coding standards
3. **Test thoroughly** - especially offline functionality
4. **Update documentation** if needed
5. **Commit with clear messages**: `git commit -m "Add: feature description"`

#### Pull Request Process
1. **Update your branch**: `git rebase main`
2. **Run tests**: Ensure everything works
3. **Create PR**: Use the PR template
4. **Code Review**: Address feedback
5. **Merge**: We'll merge once approved!

## 🎯 Coding Standards

### TypeScript/React
- Use TypeScript for all new code
- Follow React best practices
- Use functional components with hooks
- Proper error handling

### Code Style
- Use ESLint configuration
- Meaningful variable/function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages
```
type: description

[optional body]

Fixes #issue-number
```

Types: `Add`, `Fix`, `Update`, `Remove`, `Refactor`, `Docs`

## 🧪 Testing

### Manual Testing Checklist
- [ ] Works offline (disconnect internet)
- [ ] Syncs when online
- [ ] Mobile responsive
- [ ] All browsers supported
- [ ] No console errors

### Automated Testing (Future)
- Unit tests for components
- E2E tests for critical flows
- Performance testing

## 📁 Project Structure

```
attendance-app/src/
├── components/     # React components
├── db.ts          # IndexedDB operations
├── sync.ts        # Auto-sync logic
└── App.tsx        # Main app

backend/
└── server.js      # Express server
```

## 🚀 Deployment

### Local Testing
```bash
# Build for production
cd attendance-app && npm run build

# Test production build
npm run preview
```

### Docker Testing
```bash
# Test Docker build
docker-compose build
docker-compose up
```

## 🎯 Focus Areas

### High Priority
- **Offline reliability** - Must work without internet
- **Mobile experience** - Touch-friendly interface
- **Data integrity** - No data loss during sync
- **Performance** - Fast loading, minimal bundle size

### Future Enhancements
- Export functionality (CSV/PDF)
- Advanced reporting
- Multi-teacher support
- Integration with existing systems
- Real-time notifications

## 📞 Communication

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: For bugs and feature requests
- **PR Reviews**: We review within 2-3 business days

## 🙏 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in the app (if applicable)

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping improve education technology for rural communities! 🌍📚**