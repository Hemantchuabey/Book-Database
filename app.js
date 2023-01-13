import express, { json } from "express";
import mongoose from "mongoose";
import booksRouter from "./routes/bookRoutes";

const app = express();
mongoose.set("strictQuery", true);
app.use(express.json());
app.use("/", booksRouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/bookDatabase")
  .then(app.listen(5000))
  .then(console.log("Connected to Database and Listening to port 5000"))
  .catch((err) => {
    console.log(err);
  });
