# JWT Implementation Plan: IgChatbot-Ai

This plan outlines the implementation of a secure JSON Web Token (JWT) authorization system for the IgChatbot-Ai application.

---

## 1. Backend Architecture (Express.js)

Since your current project is Vite-based (frontend only), you will need a backend. I recommend an Express.js server.

### Recommended Packages
- `jsonwebtoken`: For issuing and verifying tokens.
- `bcryptjs`: For password hashing.
- `cookie-parser`: To handle refresh tokens in HttpOnly cookies.
- `dotenv`: For environment variables.

### The Two-Token Strategy
1.  **Access Token (JWT)**:
    *   **Life**: 15 minutes.
    *   **Storage**: In-memory (client-side state).
    *   **Purpose**: Authorization for API requests.
2.  **Refresh Token (JWT)**:
    *   **Life**: 7 days.
    *   **Storage**: HttpOnly, Secure Cookie.
    *   **Purpose**: To obtain a new Access Token when it expires without logging out the user.

---

## 2. Implementation Steps

### Step 1: Backend Setup
Create a `server/` folder and implement the following routes:
- `POST /api/auth/signup`: Hash password and save user.
- `POST /api/auth/login`: Verify user and issue both tokens.
- `POST /api/auth/refresh`: Verify the Refresh Token cookie and send a new Access Token.
- `POST /api/auth/logout`: Clear the Refresh Token cookie.

### Step 2: Frontend Auth Context
Create a React Context to manage authentication state globally.

```javascript
// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const login = async (credentials) => {
    // Call login API, save user and accessToken
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Step 3: Axios Interceptors
Use an Axios interceptor to automatically add the `Authorization: Bearer <token>` header and handle token refreshing.

```javascript
// src/api/axios.js
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

api.interceptors.request.use(config => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
```

### Step 4: Protected Routes
Wrap private pages (like Billing, Settings) with a protection component.

---

## 3. Security Best Practices
- **Never** store tokens in `localStorage`.
- Use **Bcrypt** for hashing.
- Set `httpOnly: true`, `secure: true`, and `sameSite: 'Strict'` for cookies.
- Implement **Rate Limiting** on auth routes.
