import express from "express";
import { Book } from "../models/Book.js";

const router = express.Router();

// getting book details and creating it
router.post("/", async (request, response) => {
  // if user didnt enter all details
  try {
    if (
      !request.body.name ||
      !request.body.author ||
      !request.body.publishedYear
    ) {
      return response.status(400).send({ message: "Enter all details!" });
    }

    const newBook = {
      name: request.body.name,
      author: request.body.author,
      publishedYear: request.body.publishedYear,
    };

    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

// to retrieve all books
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// to retrieve a particular book
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// to update a book
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.author ||
      !request.body.publishedYear
    ) {
      return response
        .status(400)
        .send({ message: "Enter all details to update !" });
    }

    const { id } = request.params;

    const book = await Book.findByIdAndUpdate(id, request.body);

    if (!book) {
      return response.status(404).send({ message: "Book is not found!" });
    }

    return response
      .status(200)
      .send({ message: "Books is updated successfully!" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// to delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    console.log("delted book: ", deletedBook);

    if (!deletedBook) {
      return response.status(404).send({ message: "Book is not found!" });
    }

    return response
      .status(200)
      .send({ messsage: "Book is deleted successfully!" });
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

export default router;
