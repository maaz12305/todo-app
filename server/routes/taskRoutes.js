const express = require("express");
const Task = require("../models/Task");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  console.log("GET /api/tasks route hit");

  try {
    const tasks = await Task.find({ user: req.userId });
    console.log("Tasks retrieved:", tasks);
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  console.log("POST /api/tasks route hit");
  console.log("Received data:", req.body);

  const { title } = req.body;

  if (!title || title.trim() === "") {
    console.log("No title provided or empty title");
    return res.status(400).json({ message: "Task title is required" });
  }

  try {
    const newTask = new Task({
      title,
      user: req.userId,
    });

    await newTask.save();
    console.log("Task saved:", newTask);
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  console.log(`PUT /api/tasks/${req.params.id} route hit`);

  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const task = await Task.findById(id);

    if (!task) {
      console.log("Task not found");
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.userId) {
      console.log("Not authorized to update this task");
      return res.status(403).json({ message: "Not authorized" });
    }

    task.title = title || task.title;
    task.completed = completed !== undefined ? completed : task.completed;

    await task.save();
    console.log("Task updated:", task);

    res.json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  console.log(`DELETE /api/tasks/${req.params.id} route hit`);

  const { id } = req.params;

  try {
    const task = await Task.findById(id);

    if (!task) {
      console.log("Task not found");
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.userId) {
      console.log("Not authorized to delete this task");
      return res.status(403).json({ message: "Not authorized" });
    }

    await task.deleteOne();
    console.log("Task deleted:", task);

    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
