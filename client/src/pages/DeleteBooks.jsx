import React, { useState } from "react";
import axios from "axios";
import Spinner from "../componets/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../componets/BackButton";
import { useSnackbar } from "notistack";

const DeleteBooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

  const handleDeleteBook = () => {
    setLoading(true);

    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });

        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <div className="text-3xl my-4">Delete Book</div>
      {loading ? Spinner : ""}

      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
