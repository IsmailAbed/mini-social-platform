# 🌐 CodeAlpha Mini Social Media Platform

A full-stack social media web application built as part of the **CodeAlpha Full Stack Development Internship**.

---

## 🚀 Tech Stack

### 🎨 Frontend
- HTML5  
- CSS3  
- Vanilla JavaScript  
- LocalStorage (JWT Authentication Storage)

### ⚙ Backend
- Node.js  
- Express.js  
- MongoDB (Local / Atlas)  
- Mongoose  
- RESTful API  
- JWT Authentication  

---

## ✨ Features

- User Registration & Login (JWT Authentication)  
- User Profile Management  
- Create & Delete Posts  
- Like / Unlike Posts  
- Comment System  
- Follow / Unfollow Users  
- Protected Routes (Frontend & Backend)  
- Persistent Database Storage  

---

## 🔁 Application Flow

1. User registers an account  
2. User logs in and receives JWT token  
3. Token is stored in LocalStorage  
4. Authenticated user can create posts  
5. Users can like/unlike posts  
6. Users can comment on posts  
7. Users can follow/unfollow other users  
8. All data is stored securely in MongoDB  

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

git clone https://github.com/IsmailAbed/mini-social-platform.git
cd mini-social-platform

2️⃣ Backend Setup

cd backend  
npm install  
npm run dev  

⚠ Make sure you have a `.env` file inside the backend folder:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

3️⃣ Frontend

Open:

frontend/login.html  

(or use Live Server in VS Code)

---

## 📦 API Endpoints

### 🔐 Authentication

POST /api/auth/register  
→ Register new user  

POST /api/auth/login  
→ Login user and receive JWT  

---

### 👤 Users

GET /api/users/:id  
→ Get user profile  

PUT /api/users/:id  
→ Update user profile  

PUT /api/users/:id/follow  
→ Follow / Unfollow user  

GET /api/users/:id/posts  
→ Get posts by specific user  

---

### 📝 Posts

POST /api/posts  
→ Create new post  

GET /api/posts  
→ Get all posts (Feed)  

GET /api/posts/:id  
→ Get single post  

DELETE /api/posts/:id  
→ Delete post (Owner only)  

PUT /api/posts/:id/like  
→ Like / Unlike post  

---

### 💬 Comments

POST /api/comments  
→ Add comment to post  

GET /api/comments/:postId  
→ Get comments for a post  

DELETE /api/comments/:id  
→ Delete comment (Owner only)  

---

## 📷 Screenshots

<img width="1500" height="485" alt="image" src="https://github.com/user-attachments/assets/ed622154-30bf-428a-886b-ab51b33f836c" />
<img width="1116" height="493" alt="image" src="https://github.com/user-attachments/assets/65ca7939-08af-4967-8ce4-e76259c47353" />
<img width="1568" height="681" alt="image" src="https://github.com/user-attachments/assets/e608bf31-2d58-4a8f-9ab2-ea9daea8cf82" />

---

## 🧠 Architecture Overview

Frontend (HTML/CSS/JS)  
↓  
REST API (Express.js)  
↓  
MongoDB Database  

JWT-based authentication ensures secure communication between client and server.

---

## 🎯 Internship Project Objective

This project demonstrates:

- Full-stack development skills  
- REST API design  
- Authentication & authorization  
- Database modeling & relationships  
- Clean project structure  
- Professional Git workflow  

---
