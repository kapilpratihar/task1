import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={ShowList} />
        <Route path="/show/:id" component={ShowDetails} />
      </Routes>
    </Router>
  );
};

export default App;
