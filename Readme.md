# Stream-Video — Backend REST API

A production-ready backend REST API for a video streaming platform built with Node.js, Express, and MongoDB.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (Access + Refresh Tokens)
- **File Upload**: Multer + Cloudinary
- **Password Hashing**: bcrypt
- **API Style**: RESTful

## Features

- User registration and login with JWT authentication
- Access token + Refresh token rotation for secure session management
- Avatar and cover image upload via Cloudinary
- Channel profile with subscriber count using MongoDB Aggregation Pipeline
- Watch history with nested lookup aggregation
- Secure cookie-based auth with httpOnly flags
- Password change with old password verification
- Email duplicate check on account update
- Temporary file cleanup after upload (success and failure both)

## API Endpoints

### Auth Routes — `/api/v1/users`

| Method | Endpoint         | Auth Required | Description                   |
| ------ | ---------------- | ------------- | ----------------------------- |
| POST   | `/register`      | No            | Register new user with avatar |
| POST   | `/login`         | No            | Login with email or username  |
| POST   | `/logout`        | Yes           | Logout and clear cookies      |
| POST   | `/refresh-token` | No            | Refresh access token          |

### User Routes — `/api/v1/users`

| Method | Endpoint           | Auth Required | Description                               |
| ------ | ------------------ | ------------- | ----------------------------------------- |
| GET    | `/current-user`    | Yes           | Get logged in user profile                |
| PATCH  | `/update-account`  | Yes           | Update name and email                     |
| POST   | `/change-password` | Yes           | Change current password                   |
| PATCH  | `/avatar`          | Yes           | Update profile avatar                     |
| PATCH  | `/cover-image`     | Yes           | Update cover image                        |
| GET    | `/c/:username`     | Yes           | Get channel profile with subscriber count |
| GET    | `/history`         | Yes           | Get watch history                         |

## Environment Variables

Create a `.env` file in root:

```env
MONGODB_URI=your_mongodb_atlas_uri
PORT=3000
ACCESS_TOKEN_SECRET=your_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_secret
REFRESH_TOKEN_EXPIRY=10d
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
CORS_ORIGIN=*
NODE_ENV=development
```

## Project Structure

```
src/
├── controllers/
│   └── user.controllers.js
├── db/
│   └── index.js
├── middlewares/
│   ├── auth.middleware.js
│   └── multer.middleware.js
├── models/
│   ├── user.models.js
│   ├── video.models.js
│   └── subscriptions.model.js
├── routes/
│   └── user.routes.js
├── utils/
│   ├── ApiError.js
│   ├── ApiResponse.js
│   ├── asyncHandler.js
│   └── cloudinary.js
├── app.js
└── index.js
```

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Sneha-chourey/Stream-Video.git

# Install dependencies
npm install

# Add your .env file

# Start development server
npm run dev
```

## Key Highlights

- MongoDB Aggregation Pipeline for channel profile and watch history
- Refresh token rotation for secure session management
- Temporary file cleanup after Cloudinary upload (success and failure both)
- Environment-based secure cookie flags (httpOnly, sameSite)
- Modular MVC architecture with separate controllers, models, routes
