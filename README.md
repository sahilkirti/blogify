# BLOGIFY Blogging Platform 

[![Frontend](https://img.shields.io/badge/frontend-react-%2361DAFB.svg?logo=react)](https://reactjs.org/)
[![Backend](https://img.shields.io/badge/backend-hono-%2343853D.svg?logo=hono)](https://hono.dev/)
[![Deployment](https://img.shields.io/badge/deployed-vercel/cloudflare-%23F38020.svg?logo=cloudflare)](https://blogify-git-main-sahilkirtis-projects.vercel.app/)

A full-stack blogging platform inspired by Medium, built with modern technologies. This project includes a **backend** built with **Hono**, **Prisma**, and **Cloudflare Workers**, and a **frontend** built with **React** and **Tailwind CSS**. It supports user authentication, blog creation, updating, and fetching blogs with pagination.

---

## **Features** :

### **Frontend**
1. **User Authentication**:
   - Signup and Signin with JWT-based authentication.
   - Protected routes for authenticated users only.

2. **Blog Management**:
   - Create, update, and fetch blogs.
   - Fetch all blogs with pagination and author details.
   - Fetch a specific blog by its ID.

3. **Responsive Design**:
   - Built with **Tailwind CSS** for a clean and responsive UI.

4. **Routing**:
   - Client-side routing with **React Router**.

### **Backend**
1. **User Authentication**:
   - Signup and Signin with JWT-based authentication.
   - Protected routes for authenticated users only.

2. **Blog Management**:
   - Create, update, and fetch blogs.
   - Fetch all blogs with pagination and author details.
   - Fetch a specific blog by its ID.

3. **Validation**:
   - Input validation using **Zod** for all API requests.

4. **Database**:
   - Uses **PostgreSQL** as the primary database.
   - **Prisma ORM** for type-safe database interactions.
   - Connection pooling with **Prisma Accelerate** for better performance.

5. **Edge Computing**:
   - Built on **Cloudflare Workers** for low-latency, scalable APIs.

---

## **Tech Stack**

### **Frontend**
- **Framework**: React
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: React Context (if needed)
- **Build Tool**: Vite

### **Backend**
- **Framework**: Hono
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Validation**: Zod
- **Deployment**: Cloudflare Workers
- **Language**: TypeScript

### **Common**
- **Validation**: Zod
- **TypeScript**: Used across the entire stack for type safety.

---

## **File Structure**

### **Frontend**
frontend/
├── src/
│ ├── components/ # Reusable components (e.g., Auth, Quote)
│ ├── pages/ # Page components (e.g., Signup, Signin, Blogs)
│ ├── App.tsx # Main app component with routing
│ ├── index.tsx # Entry point for the React app
│ └── ... # Other files (e.g., styles, utilities)
├── package.json # Dependencies and scripts
└── README.md # Project documentation

### **Backend**
backend/
├── src/
│ ├── routes/ # Route handlers (e.g., user, blog)
│ ├── index.ts # Main entry point for the backend
│ └── schema.prisma # Prisma schema for database models
├── package.json # Node.js dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation


### **Common**
common/
├── src/
│ ├── index.ts # Zod schemas and types
├── package.json # Dependencies for the common module
└── README.md # Documentation for the common module


---

## **API Endpoints**

### **User Routes**
1. **Signup**:
   - **POST** `/api/v1/user/signup`
   - Request Body:
     ```json
     {
       "email": "user@example.com",
       "password": "password123",
       "name": "John Doe"
     }
     ```
   - Response:
     ```json
     {
       "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     }
     ```

2. **Signin**:
   - **POST** `/api/v1/user/signin`
   - Request Body:
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - Response:
     ```json
     {
       "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
     }
     ```

### **Blog Routes**
1. **Create Blog**:
   - **POST** `/api/v1/blog`
   - Request Body:
     ```json
     {
       "title": "My First Blog",
       "content": "This is the content of my blog."
     }
     ```
   - Response:
     ```json
     {
       "id": 1
     }
     ```

2. **Update Blog**:
   - **PUT** `/api/v1/blog`
   - Request Body:
     ```json
     {
       "id": 1,
       "title": "Updated Blog Title",
       "content": "Updated blog content."
     }
     ```
   - Response:
     ```json
     {
       "id": 1
     }
     ```

3. **Fetch All Blogs**:
   - **GET** `/api/v1/blog/bulk`
   - Response:
     ```json
     {
       "blogs": [
         {
           "id": 1,
           "title": "My First Blog",
           "content": "This is the content of my blog.",
           "author": {
             "name": "John Doe"
           }
         }
       ]
     }
     ```

4. **Fetch Blog by ID**:
   - **GET** `/api/v1/blog/:id`
   - Response:
     ```json
     {
       "blog": {
         "id": 1,
         "title": "My First Blog",
         "content": "This is the content of my blog.",
         "author": {
           "name": "John Doe"
         }
       }
     }
     ```

---

## **Setup Instructions**

### **Frontend**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/frontend

