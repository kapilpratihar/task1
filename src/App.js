import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import BookingForm from "./components/BookingForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShowList />} />
        <Route exact path="/show/:id" element={<ShowDetails />} />
        <Route exact path="/booking/:id/:name" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
