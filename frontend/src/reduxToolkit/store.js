import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

const store = configureStore({ reducer: { todoSlice } });

export default store;
