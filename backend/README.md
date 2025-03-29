# Blogify Backend API

[![Hono](https://img.shields.io/badge/hono-%2343853D.svg?logo=hono&logoColor=white)](https://hono.dev/)
[![Cloudflare Workers](https://img.shields.io/badge/cloudflare-%23F38020.svg?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Prisma](https://img.shields.io/badge/prisma-%232D3748.svg?logo=prisma&logoColor=white)](https://www.prisma.io/)

High-performance backend API for Blogify built with:

- ⚡ **Hono** - Ultrafast edge framework
- 🌐 **Cloudflare Workers** - Edge runtime
- 🗄️ **Prisma** - Type-safe database client
- 🔐 **JWT** - Secure authentication
- 🛡️ **Zod** - Input validation

## 🚀 Features

### Core Functionality
- **Authentication System**
  - JWT token generation/validation
  - Password hashing (bcrypt)
  - Protected routes middleware

### Database
- **PostgreSQL** with Prisma ORM
- **Connection pooling** via Prisma Accelerate
- **Migrations** support
- **Type-safe** queries

### API
- **RESTful endpoints**
- **Zod validation** for all inputs
- **Error handling** middleware
- **CORS** configured

## 🏗️ Project Structure
backend/
├── src/
│ ├── config/ # Environment configuration
│ ├── middleware/ # Auth and validation
│ ├── models/ # Database models
│ ├── routes/ # API endpoints
│ ├── utils/ # Helper functions
│ ├── index.ts # Application entry
│ └── schema.prisma # Prisma schema
├── .env.example # Environment variables
├── package.json
└── wrangler.toml # Cloudflare config


## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Hono | Web framework |
| Cloudflare Workers | Edge runtime |
| PostgreSQL | Database |
| Prisma | ORM |
| Prisma Accelerate | Connection pooling |
| Zod | Input validation |
| JSON Web Tokens | Authentication |
| Bcrypt | Password hashing |

## ⚙️ Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env

Update environment variables:

env
Copy
DATABASE_URL="postgresql://user:password@localhost:5432/blogify?schema=public"
JWT_SECRET="your-strong-secret-key"

🚀 Local Development
Prerequisites
Node.js v18+

PostgreSQL

Cloudflare Wrangler CLI

Setup
bash
Copy
npm install
npx prisma generate
npx prisma migrate dev --name init
Running Locally
bash
Copy
npm run dev
☁️ Cloudflare Workers Deployment
Install Wrangler:

bash
Copy
npm install -g wrangler
Authenticate:

bash
Copy
wrangler login
Deploy:

bash
Copy
wrangler publish
