import { Router } from "express";
import createTodo, {
  deleteTodo,
  getAllTodos,
  getSingleTodo,
  updateToDo,
} from "../controllers/todoController.js";

const todoRoutes = Router();

// GET all todos
todoRoutes.get("/", getAllTodos);

// GET a single todo
todoRoutes.get("/:id", getSingleTodo);

// POST a new todo
todoRoutes.post("/", createTodo);

// DELETE a todo
todoRoutes.delete("/:id", deleteTodo);

// UPDATE a todo
todoRoutes.patch("/:id", updateToDo);

export default todoRoutes;
