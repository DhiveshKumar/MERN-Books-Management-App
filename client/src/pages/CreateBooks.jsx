import React, { useState } from "react";
import Spinner from "../componets/Spinner";
import { useNavigate } from "react-router-dom";
import BackButton from "../componets/BackButton";
import axios from "axios";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateBook = () => {
    setLoading(true);
    const data = {
      name: title,
      author: author,
      publishedYear: publishedYear,
    };

    axios
      .post("https://mern-book-management-app.onrender.com/books/", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Create Successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : " "}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="publishedYear" className="text-xl mr-4 text-gray-500">
            Published Year
          </label>
          <input
            id="publishedYear"
            type="text"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleCreateBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
