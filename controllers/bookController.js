import bookModel from "../model/bookModel";

export const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await bookModel.find();
  } catch (err) {
    return console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "Books Not Found!!" });
  }
  return res.status(200).json({ books });
};

export const addBooks = async (req, res, next) => {
  const { title, author, description } = req.body;
  let exisitingBooks;
  try {
    exisitingBooks = await bookModel.findOne({ author });
  } catch (err) {
    return console.log(err);
  }
  if (exisitingBooks) {
    return res.status(400).json({ message: "Book already exist !!" });
  }
  const book = new bookModel({
    title,
    author,
    description,
  });
  try {
    await book.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ book });
};

export const updateBook = async (req, res, next) => {
  const { title, author, description } = req.body;
  let bookID = req.params.id;
  let book;
  try {
    book = await bookModel.findByIdAndUpdate(bookID, {
      title,
      author,
      description,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!book) {
    return res
      .status(500)
      .json({ message: "Unable to Update the Book List !!" });
  }
  return res.status(200).json({ book });
};
