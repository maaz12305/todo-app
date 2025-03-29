# todo-app

This is a full-stack Todo application with user authentication. Users can sign up, log in, create, read, update, and delete tasks. Each user has access only to their own tasks.  
**Live Demo:** [https://maaz-todo-app.netlify.app](https://maaz-todo-app.netlify.app)

---

## Tech Stack

**Frontend:** React.js, Axios for HTTP requests, React Router for navigation, Plain CSS for styling

**Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose, JWT for authentication

---

## Deployment

**Frontend:** Netlify  
**Backend:** Render

---

## Local Setup Instructions

1. **Clone the Repository**
   
2. **Environment Variables**
   
   Create `.env` files for both the frontend and backend.

   **Backend `.env`**
MONGODB_URI=<your MongoDB Atlas connection string>
JWT_SECRET=<your JWT secret>

**Frontend `.env`**
REACT_APP_BACKEND_URL=http://localhost:3000


3. **Install Dependencies**

4. **Run the Application Locally**

- **Start the Backend**
  ```
  cd backend
  npm start
  ```
  The backend will run on `http://localhost:3000`.

- **Start the Frontend**
  ```
  cd frontend
  npm start
  ```
  The frontend will run on `http://localhost:3001`.

---

## Usage

- **Sign Up:** Create a new user by providing an email and password.
- **Log In:** Authenticate with your email and password to receive a JWT token.
- **Manage Tasks:** Create new tasks, Edit existing tasks, Delete tasks.

**Authentication:** Each user has access only to their own tasks. The JWT token is stored in `localStorage`.

---

## API Endpoints

### Auth Routes

- **POST** `/api/auth/signup` → Register a new user
- **POST** `/api/auth/login` → Log in and get a JWT token

### Task Routes

- **GET** `/api/tasks` → Get all tasks for the logged-in user
- **POST** `/api/tasks` → Create a new task
- **PUT** `/api/tasks/:id` → Update a task
- **DELETE** `/api/tasks/:id` → Delete a task

---

## Deployment Instructions

### Deploying the Backend on Render

1. Push the backend code to GitHub.
2. Go to **Render**.
3. Select **New Web Service** and connect your GitHub repository.
4. Set the environment variables:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: Your JWT secret
5. Deploy the backend and get the backend URL.

### Deploying the Frontend on Netlify

1. Push the frontend code to GitHub.
2. Go to **Netlify**.
3. Select **New Site from Git** and connect your GitHub repository.
4. Set the environment variable:
- `REACT_APP_BACKEND_URL`: Your backend URL
5. Deploy the frontend.
