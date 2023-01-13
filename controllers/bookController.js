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
