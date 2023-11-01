import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/Book.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

// parsing req's body
app.use(express.json());

// middleware to handle cors policy
app.use(cors()); //allows all origins

// app.use(
//   cors({
//     origin: "http://localhost:3000/",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type "],
//   })
// );

app.get("/", (request, response) => {
  // console.log(request);
  return response.status(234).send("Welcome to book mongoose strore!");
});

app.use("/books", bookRoutes);

// connecting to database
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to database!");
    app.listen(PORT, () => {
      console.log("App is listening at port", PORT);
    });
  })
  .catch((error) => {
    console.log("ERROR: ", error);
  });
