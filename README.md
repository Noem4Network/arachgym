# ArachGym

> **ArachGym** is an advanced, privacy-first, fully-featured fitness tracking and workout management platform engineered by [ArachTech.am](https://arachtech.am).

Built for maximum performance, offline reliability, and seamless workout logging across Web, Android, and iOS devices.

---

## 🚀 Key Highlights

- **Local Shared Exercise Pool**: Instant exercise searches and routines backed by an internal local catalog (`data/exercises.json`), eliminating external rate limits.
- **Cross-Platform**: Responsive Web App, Native Android App (via Capacitor), and iOS support.
- **Privacy First**: Zero third-party tracker bloat. All personal workout records, routines, and telemetry remain strictly within your ecosystem.
- **Robust Tech Stack**:
  - **Frontend**: Modern React, Vite, Tailwind CSS, Capacitor
  - **Backend**: Node.js microservices & API
  - **Storage**: Offline-capable local caching & scalable backend persistence

---

## 🛠️ Project Structure

```text
├── api/             # ArachGym Node.js backend service
├── data/            # Local shared exercise datasets & cache
├── frontend/        # ArachGym React + Vite + Capacitor application
├── web/             # Web distribution & static assets
├── docs/            # Architecture & operational guides
└── docker-compose.yml # Containerized orchestration
```

---

## 💻 Quick Start

### 1. Prerequisites
- Node.js (v18+)
- Docker & Docker Compose (optional for containerized deployment)

### 2. Environment Configuration
Copy `.env.example` to `.env` and set your instance credentials:
```bash
cp .env.example .env
```

### 3. Running Locally
Run the backend and frontend services:
```bash
# Backend
cd api && npm install && npm start

# Frontend
cd ../frontend && npm install && npm run dev
```

---

## 📄 License & Intellectual Property

Copyright (c) 2026 **ArachTech** ([ArachTech.am](https://arachtech.am)). All rights reserved.  
Refer to [LICENSE](file:///c:/Users/vache/Downloads/openGym-main/openGym-main/LICENSE) for terms.
