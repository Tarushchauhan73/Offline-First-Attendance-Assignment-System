# Offline-First Attendance & Assignment System

Take attendance without an internet connection. Data is stored locally in the browser and automatically syncs to the server once you're back online.

## Stack

- **Frontend:** React 19 + TypeScript + Vite, data stored offline in IndexedDB
- **Backend:** Node.js + Express (in-memory sync server)
- **Docs:** see the [`docs/`](./docs) folder for deployment, usage, contributing, and other guides

## Project structure

```
.
├── attendance-app/   # React frontend (offline-first, IndexedDB)
├── backend/          # Express sync server
├── docs/             # Deployment, usage, contributing, changelog, etc.
└── docker-compose.yml
```

## Run locally

**Backend**
```bash
cd backend
cp .env.example .env
npm install
npm start
```

**Frontend** (in a new terminal)
```bash
cd attendance-app
npm install
npm run dev
```

## Run with Docker

```bash
docker compose up --build
```

## API

| Method | Endpoint               | Description                          |
|--------|-------------------------|----------------------------------------|
| GET    | `/api/health`           | Health check                           |
| POST   | `/api/attendance/bulk`  | Sync queued attendance records         |
| GET    | `/api/attendance`       | List all synced attendance records     |

## Deployment

The frontend deploys automatically to GitHub Pages on every push to `main` (see `.github/workflows/deploy-pages.yml`). To point it at a live backend, set a repository variable `VITE_API_URL` (Settings → Secrets and variables → Actions → Variables) to `<your-backend-url>/api`, and make sure GitHub Pages is set to deploy via **GitHub Actions** (Settings → Pages → Source).

The backend can be deployed anywhere that runs Node.js (Render, Railway, etc.) — see [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) for details.

## More docs

- [Deployment guide](./docs/DEPLOYMENT.md)
- [Usage guide](./docs/USAGE.md)
- [Contributing](./docs/CONTRIBUTING.md)
- [Changelog](./docs/CHANGELOG.md)
- [Security policy](./docs/SECURITY.md)
- [Code of conduct](./docs/CODE_OF_CONDUCT.md)
