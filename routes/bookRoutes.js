import express from "express";
import { addBooks, getAllBooks } from "../controllers/bookController";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.post("/addBook", addBooks);

export default booksRouter;
