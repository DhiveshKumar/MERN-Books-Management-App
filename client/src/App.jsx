import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import ShowBooks from "./pages/ShowBooks";
import UpdateBooks from "./pages/UpdateBooks";
import Check from "./pages/Check";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/update/:id" element={<UpdateBooks />} />
    </Routes>
  );
};

export default App;
