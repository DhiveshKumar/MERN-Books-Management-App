import mongoose from "mongoose";

// defining schema
const book = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// defining model(helps to interact with collections)
export const Book = mongoose.model("Book", book);
