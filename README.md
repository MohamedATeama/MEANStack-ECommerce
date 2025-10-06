# 🛒 E-Commerce Backend API (Node.js + TypeScript)

A scalable, secure backend API for an e-commerce application built using **Node.js**, **Express**, and **TypeScript**.  
This project provides complete backend functionality for an online store — including authentication, product management, user profiles, image uploads, and more — with robust security middleware and modern best practices.

---

## 🚀 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Runtime** | Node.js (TypeScript) |
| **Framework** | Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Authentication** | JWT (JSON Web Tokens) |
| **Security** | Helmet, CORS, CSRF, HPP, Express Rate Limit, Mongo Sanitize |
| **File Upload** | Multer + Sharp (for image handling) |
| **Email** | Nodemailer |
| **Environment Management** | dotenv |
| **Validation** | express-validator |
| **Localization** | i18n |
| **Utilities** | bcryptjs, crypto, cookie-parser, compression |

---

## 📂 Project Structure

```
ECommerce-Backend-Node.js/
│
├── app.ts                # Main app setup (Express initialization, middleware, routes)
├── index.ts              # Entry point (server startup)
├── config/               # Configuration files (DB, environment, etc.)
├── controllers/          # Route logic (auth, product, order, user)
├── models/               # Mongoose schemas and models
├── routes/               # API route definitions
├── middlewares/          # Custom middlewares (auth, validation, error handling)
├── utils/                # Helper functions (email, image processing, etc.)
├── public/               # Public/static assets (uploads, product images)
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```

---

## ⚙️ Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/MohamedATeama/ECommerce-Backend-Node.js.git
cd ECommerce-Backend-Node.js
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and include:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 4. Run the development server

```bash
npm run start:dev
```

### 5. Build for production

```bash
npm run build
npm run start:prod
```

---

## 🧱 Core Features

- 🔐 **User Authentication**
  - Register, login, and manage sessions using JWT.
  - Passwords hashed with bcrypt.

- 🛍️ **Product Management**
  - Create, update, delete, and fetch products.
  - Image upload with Multer and processing via Sharp.

- 🧾 **Orders & Cart**
  - Add products to cart, create and manage orders.

- 📧 **Email Notifications**
  - Send account verification or order confirmations using Nodemailer.

- 🌍 **Localization**
  - Multi-language support through i18n middleware.

- 🛡️ **Security**
  - CSRF protection (`csurf`)
  - Rate limiting (`express-rate-limit`)
  - Data sanitization (`express-mongo-sanitize`)
  - HTTP parameter pollution protection (`hpp`)
  - Helmet for secure HTTP headers

---

## 🧩 Example API Routes

| Method | Endpoint | Description |
|---------|-----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login and receive JWT |
| `GET` | `/api/products` | Get all products |
| `POST` | `/api/products` | Create a new product |
| `PUT` | `/api/products/:id` | Update product |
| `DELETE` | `/api/products/:id` | Delete product |
| `POST` | `/api/orders` | Place new order |

---

## 🧠 Code Quality & Type Safety

- Fully written in **TypeScript**
- Uses `interfaces` for type definitions
- Organized modular architecture (controllers, models, middlewares)
- Error handling with `express-async-handler`

---

## 🧰 NPM Scripts

| Command | Description |
|----------|--------------|
| `npm run start:dev` | Start server with Nodemon in development |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run start:prod` | Run compiled code in production mode |

---

## 👨‍💻 Author

**Mohamed A. Teama**  
🔗 [GitHub Profile](https://github.com/MohamedATeama)
