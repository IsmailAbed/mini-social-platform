🌐 CodeAlpha Mini Social Media Platform

A full-stack social media web application built as part of the CodeAlpha Full Stack Development Internship.

🚀 Tech Stack
🎨 Frontend

HTML5

CSS3

Vanilla JavaScript

LocalStorage (JWT Authentication)

⚙ Backend

Node.js

Express.js

MongoDB (Mongoose ODM)

JWT Authentication

RESTful API

✨ Features

User Registration & Login (JWT Authentication)

Secure Protected Routes

User Profiles

Create & Delete Posts

Like / Unlike Posts

Comment System

Follow / Unfollow Users

Real-time Feed Rendering

Persistent MongoDB Database Storage

🔁 Application Flow

User registers or logs in

JWT token is stored in LocalStorage

User can create posts

Posts appear in the main feed

Users can like or unlike posts

Users can comment on posts

Users can follow or unfollow other users

All data is securely stored in MongoDB

⚙️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/mini-social-platform.git
cd mini-social-platform

2️⃣ Backend Setup
cd backend
npm install
npm run dev


⚠ Make sure you have a .env file configured:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/miniSocialDB
JWT_SECRET=your_secret_key


Backend runs on:

http://localhost:5000

3️⃣ Frontend

Open:

frontend/login.html


Or use Live Server in VS Code.

📦 API Endpoints
🔐 Authentication
POST /api/auth/register
→ Register new user

POST /api/auth/login
→ Login user and receive JWT

👤 Users
GET /api/users/:id
→ Get user profile

PUT /api/users/:id
→ Update profile bio

PUT /api/users/:id/follow
→ Follow / Unfollow user

📝 Posts
POST /api/posts
→ Create new post

GET /api/posts
→ Get all posts (Feed)

GET /api/posts/:id
→ Get single post

DELETE /api/posts/:id
→ Delete post (owner only)

PUT /api/posts/:id/like
→ Like / Unlike post

💬 Comments
POST /api/comments
→ Add comment to post

GET /api/comments/:postId
→ Get comments for a post

DELETE /api/comments/:id
→ Delete comment (owner only)

🔐 Security

Passwords are hashed using bcrypt

Authentication handled using JWT

Protected backend routes with middleware

Token-based frontend access control

📷 Screenshots

(Add your screenshots here once UI is polished)

<img src="screenshot1.png" width="100%" />

🎯 Project Highlights

Full RESTful API architecture

Clean MVC backend structure

Secure authentication flow

Proper database relationships (Users, Posts, Comments, Followers)

Real-world social media logic implementation
