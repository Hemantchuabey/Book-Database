import express from "express";
import {
  addBooks,
  getAllBooks,
  updateBook,
} from "../controllers/bookController";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.post("/addBook", addBooks);
booksRouter.put("/updateBook/:id", updateBook);

export default booksRouter;
