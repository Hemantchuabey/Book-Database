import mongoose, { Schema } from "mongoose";

const bookSchema = mongoose.Schema;
const bookModel = new bookSchema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("bookModel", bookModel);
