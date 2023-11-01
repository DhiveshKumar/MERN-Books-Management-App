import React from "react";
import BookSingleCard from "./BookSingleCard";

const BookCard = ({ books }) => {
  console.log("Books: ", books);

  const bookCards = books.map((item) => {
    return <BookSingleCard key={item._id} book={item} />;
  });

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bookCards}
    </div>
  );
};

export default BookCard;
