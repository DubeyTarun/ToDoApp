import { createAsyncThunk } from "@reduxjs/toolkit";

const route = "/api/todos";

export const fetchToDo = createAsyncThunk("fetchToDo", async () => {
  const response = await fetch(route);
  return await response.json();
});

export const addToDo = createAsyncThunk("addToDo", async (todo) => {
  const response = await fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  return await response.json();
});

export const deleteToDo = createAsyncThunk("deleteToDo", async (id) => {
  const response = await fetch(`${route}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  return await response.json();
});
