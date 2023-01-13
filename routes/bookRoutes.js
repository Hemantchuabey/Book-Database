import express from "express";
import { getAllBooks } from "../controllers/bookController";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);

export default booksRouter;
