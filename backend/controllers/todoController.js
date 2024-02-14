import todoModel from "../models/todoModel.js";

export const getAllTodos = async (req, res) => {
  try {
    const todos = await todoModel.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSingleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoModel.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createTodo = async (req, res) => {
  const { title, dueDate, assignedTo, addedBy } = req.body;
  try {
    const todo = await todoModel.create({
      title,
      dueDate,
      assignedTo,
      addedBy,
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoModel.findByIdAndDelete(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateToDo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoModel.findByIdAndUpdate(id, { ...req.body });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default createTodo;
