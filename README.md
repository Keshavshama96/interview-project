# ScamShield

ScamShield is a full-stack MERN application that helps users identify potentially fraudulent messages using keyword-based scam analysis.

Users can register, log in securely, analyze suspicious messages, view their scan history, and access their data through a protected authentication system.

## Features

- User Registration and Login
- JWT Authentication
- Protected Routes
- Scam Message Analysis
- Risk Score Calculation
- Risk Level Classification
- Matched Keyword Detection
- User-Specific Scan History
- MongoDB Atlas Integration
- Responsive Frontend
- Backend Deployment on Render
- Frontend Deployment on Vercel

## Tech Stack

### Frontend
- React.js
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Deployment
- Vercel
- Render



## Live Demo

Frontend:
https://interview-project-fawn.vercel.app/

 Backend:
https://scamshield-backend-dj3g.onrender.com



## Project Architecture

```text
Frontend (React)
        ↓
API Calls (Fetch)
        ↓
Backend (Express)
        ↓
JWT Middleware
        ↓
Controllers
        ↓
MongoDB Atlas
```



## Installation

### Clone Repository

```bash
git clone https://github.com/Keshavshama96/interview-project.git
```

### Install Frontend Dependencies

```bash
cd client
npm install
npm run dev
```

### Install Backend Dependencies

```bash
cd server
npm install
npm start
```

## Environment Variables

```env
MONGO_URI=
JWT_SECRET=
```


## Author

Keshav Shama
LinkedIn: https://www.linkedin.com/in/keshav-shama-3797872a7/
GitHub: https://github.com/Keshavshama96