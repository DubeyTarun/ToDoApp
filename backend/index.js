import express, { json } from "express";
import todoRoutes from "./routers/todoRoutes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

//express app
const app = express();

//middleware
app.use(json()); // to tackle any request body getting from the request (mainly for POST requests)
app.use((req, res, next) => {
  // console.log(req.path, req.method);
  next();
});

//routers
app.use("/api/todos", todoRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      // console.log("Connected to DB & Listening on Port!!! ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
