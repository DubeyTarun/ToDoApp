import { Schema, model } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    dueDate: { type: Date, required: true },
    assignedTo: { type: Array, required: true },
    addedBy: { type: String, required: false },
  },
  { timestamps: true }
);

const env = process.env.APP_ENV;
let todoModel;

// Routers
if (env === "TEST") {
  todoModel = model("TodoTest", todoSchema);
} else if (env === "PROD") {
  todoModel = model("Todo", todoSchema);
} else {
  // Handle unknown environment (optional)
  console.error("Unknown environment:", env);
  todoModel = model("Todo", todoSchema); // Default to "PROD" model
}

export default todoModel;
