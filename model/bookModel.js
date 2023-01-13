import mongoose, { Schema } from "mongoose";

const Schema = mongoose.Schema;
const bookModel = new Schema({
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
