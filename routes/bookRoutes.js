import express from "express";
import {
  addBooks,
  deleteBook,
  getAllBooks,
  updateBook,
} from "../controllers/bookController";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.post("/addBook", addBooks);
booksRouter.put("/updateBook/:id", updateBook);
booksRouter.delete("/deleteBook/:id", deleteBook);

export default booksRouter;
