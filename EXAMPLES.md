# nxpcli Examples

This document provides practical examples of using nxpcli to scaffold Express.js projects.

## Table of Contents

- [Basic Project Creation](#basic-project-creation)
- [Creating Projects with Modules](#creating-projects-with-modules)
- [Module Generation](#module-generation)
- [Real-World Examples](#real-world-examples)

---

## Basic Project Creation

### Simple API Server

Create a basic API server:

```bash
nxpcli create project my-api
cd my-api
npm run dev
```

Your server will start at `http://localhost:5000`

### E-commerce Backend

```bash
nxpcli create project ecommerce-api
cd ecommerce-api

# Generate modules
nxpcli create module product --model
nxpcli create module user --model
nxpcli create module order --model
nxpcli create module payment

npm run dev
```

### Blog API

```bash
nxpcli create project blog-api
cd blog-api

# Generate modules
nxpcli create module post --model
nxpcli create module comment --model
nxpcli create module author --model
nxpcli create module category --model

npm run dev
```

---

## Creating Projects with Modules

### Social Media API

```bash
# Create project
nxpcli create project social-api
cd social-api

# User management
nxpcli create module user --model
nxpcli create module profile --model
nxpcli create module auth

# Social features
nxpcli create module post --model
nxpcli create module comment --model
nxpcli create module like --model
nxpcli create module follow --model

# Media
nxpcli create module media --model
nxpcli create module upload

# Notifications
nxpcli create module notification --model

npm run dev
```

### Task Management API

```bash
# Create project
nxpcli create project task-manager-api
cd task-manager-api

# Core modules
nxpcli create module project --model
nxpcli create module task --model
nxpcli create module user --model

# Features
nxpcli create module team --model
nxpcli create module comment --model
nxpcli create module attachment --model
nxpcli create module activity --model

npm run dev
```

---

## Module Generation

### With Mongoose Model

Generate a module with Mongoose model and TypeScript interface:

```bash
nxpcli create module product --model
```

This creates:

- `product.route.ts` - Express routes
- `product.controller.ts` - Request handlers
- `product.service.ts` - Business logic with Mongoose
- `product.validation.ts` - Zod validation schemas
- `product.model.ts` - Mongoose schema
- `product.interface.ts` - TypeScript interface

### Without Model (Service Layer Only)

Generate a module without database model:

```bash
nxpcli create module email
```

This creates:

- `email.route.ts`
- `email.controller.ts`
- `email.service.ts` - Dummy service (you implement logic)
- `email.validation.ts`

Perfect for:

- Email services
- Payment gateways
- External API integrations
- Utility services

---

## Real-World Examples

### REST API with Authentication

```bash
# Create project
nxpcli create project secure-api
cd secure-api

# Authentication & Users
nxpcli create module auth
nxpcli create module user --model
nxpcli create module role --model
nxpcli create module permission --model

# Business logic
nxpcli create module product --model
nxpcli create module category --model

# Install additional packages
npm install bcryptjs jsonwebtoken
npm install -D @types/bcryptjs @types/jsonwebtoken

npm run dev
```

### Microservice API

```bash
# Create project
nxpcli create project order-service
cd order-service

# Core modules
nxpcli create module order --model
nxpcli create module orderitem --model

# External integrations
nxpcli create module payment
nxpcli create module shipping
nxpcli create module notification

# Install message queue
npm install amqplib
npm install -D @types/amqplib

npm run dev
```

### GraphQL API (with Express)

```bash
# Create project
nxpcli create project graphql-api
cd graphql-api

# Generate modules
nxpcli create module user --model
nxpcli create module post --model

# Install GraphQL
npm install graphql express-graphql
npm install -D @types/graphql

npm run dev
```

---

## Environment Configuration

After creating a project, configure your environment:

```bash
cd your-project

# Copy example env file
cp .env.example .env

# Edit .env file
nano .env
```

Example `.env` configuration:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb://localhost:27017/myapp
```

For production:

```env
NODE_ENV=production
PORT=8080
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/myapp
```

---

## Development Workflow

### 1. Create Project

```bash
nxpcli create project my-app
cd my-app
```

### 2. Generate Modules

```bash
nxpcli create module user --model
nxpcli create module auth
```

### 3. Configure Database

Edit `.env`:

```env
DATABASE_URL=mongodb://localhost:27017/myapp
```

### 4. Implement Business Logic

Edit generated files:

- `src/modules/user/user.service.ts` - Add your logic
- `src/modules/user/user.validation.ts` - Update validation
- `src/modules/user/user.model.ts` - Modify schema

### 5. Run Development Server

```bash
npm run dev
```

### 6. Test Your API

```bash
curl http://localhost:5000
curl http://localhost:5000/api/v1/user
```

### 7. Build for Production

```bash
npm run build
npm start
```

---

## Tips & Best Practices

### Naming Conventions

✅ **Good names:**

- `user-management`
- `product-catalog`
- `order-service`
- `api-gateway`

❌ **Bad names:**

- `My Project` (spaces)
- `123-app` (starts with number)
- `node` (reserved keyword)
- `USER_API` (uppercase)

### Module Organization

Group related modules:

```
src/modules/
├── auth/           # Authentication
├── user/           # User management
├── product/        # Products
├── order/          # Orders
└── payment/        # Payments
```

### Environment Files

Always use `.env.example` for documentation:

```env
# .env.example
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb://localhost:27017/your_db_name
JWT_SECRET=your_secret_here
```

---

## Common Patterns

### CRUD API

```bash
nxpcli create project crud-api
cd crud-api
nxpcli create module resource --model
```

Implement:

- `POST /api/v1/resource` - Create
- `GET /api/v1/resource` - Read all
- `GET /api/v1/resource/:id` - Read one
- `PATCH /api/v1/resource/:id` - Update
- `DELETE /api/v1/resource/:id` - Delete

### Authentication Flow

```bash
nxpcli create project auth-api
cd auth-api
nxpcli create module auth
nxpcli create module user --model
```

Implement:

- `POST /api/v1/auth/register` - Sign up
- `POST /api/v1/auth/login` - Sign in
- `POST /api/v1/auth/refresh` - Refresh token
- `POST /api/v1/auth/logout` - Sign out

---

## Next Steps

After scaffolding your project:

1. **Read the generated README.md** in your project
2. **Configure your database** connection
3. **Implement business logic** in service files
4. **Add authentication** if needed
5. **Write tests** for your endpoints
6. **Deploy** to your preferred platform

---

Happy coding! 🚀
