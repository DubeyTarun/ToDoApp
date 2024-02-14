import { createSlice } from "@reduxjs/toolkit";
import { addToDo, deleteToDo, fetchToDo } from "../thunks/todoThunks";

const initialToDo = {
  todos: [],
  isFetchingTodos: false,
  isAddingTodo: false,
  isDeletingTodo: false,
  isError: false,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialToDo,
  extraReducers: (builder) => {
    // GET TODO API CALL
    builder.addCase(fetchToDo.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    });
    builder.addCase(fetchToDo.pending, (state, action) => {
      state.isFetchingTodos = true;
    });
    builder.addCase(fetchToDo.rejected, (state, action) => {
      state.isError = true;
    });

    // POST TODO API CALL
    builder.addCase(addToDo.fulfilled, (state, action) => {
      const insertIndex = state.todos.findIndex(
        (ele) => new Date(ele.dueDate) > new Date(action.payload.dueDate)
      );

      const newIndex = insertIndex !== -1 ? insertIndex : state.todos.length;

      state.todos.splice(newIndex, 0, action.payload);
      state.isAddingTodo = false;
    });
    builder.addCase(addToDo.pending, (state, action) => {
      state.isAddingTodo = true;
    });
    builder.addCase(addToDo.rejected, (state, action) => {
      state.isError = true;
    });

    // DELETE TODO API CALL
    builder.addCase(deleteToDo.fulfilled, (state, action) => {
      const removeIndex = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );

      state.todos.splice(removeIndex, 1);
    });
    builder.addCase(deleteToDo.pending, (state, action) => {
      state.isDeletingTodo = true;
    });
    builder.addCase(deleteToDo.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export { fetchToDo };
export default todoSlice.reducer;
