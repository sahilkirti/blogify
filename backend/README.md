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
