require('dotenv').config(); 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");  
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes"); 

const app = express();

app.use(cors({
  origin: ["http://localhost:3001",
           "https://maaz-todo-app.netlify.app"
           ],
  methods: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true 
}));

app.use(express.json());

app.use("/api/auth", authRoutes);  
app.use("/api/tasks", authMiddleware, taskRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log("MongoDB connection error:", err));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
