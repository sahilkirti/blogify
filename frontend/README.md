# Blogify Frontend
Modern frontend for Blogify blogging platform built with:

- ⚡ **Vite** - Next-gen frontend tooling
- 🚀 **React 18** - With TypeScript for type safety
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔄 **React Router** - Client-side navigation

## ✨ Features

- **Authentication Flow**
  - JWT-based login/signup
  - Protected routes
  - Persistent sessions

- **Blog Management**
  - Create/edit blog posts
  - Rich text editor
  - Responsive layouts

- **UI Components**
  - Custom theme system
  - Dark/light mode
  - Loading skeletons
  - Toast notifications

## 🛠️ Project Structure
frontend/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images, fonts
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Route components
│ ├── styles/ # Global styles
│ ├── types/ # TypeScript types
│ ├── utils/ # Helper functions
│ ├── App.tsx # Main component
│ └── main.tsx # Entry point
├── .env.example # Environment variables
├── index.html # HTML template
├── package.json
└── tsconfig.json


## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- Yarn or npm

### Installation
```bash
git clone https://github.com/sahilkirti/blogify.git
cd blogify/frontend
npm install
Development
bash
Copy
npm run dev
Runs the app in development mode at http://localhost:5173

Building for Production
bash
Copy
npm run build
npm run preview
