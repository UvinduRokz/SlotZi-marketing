import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Adjust the path if needed
import "./App.css";

function App() {
  return (
    <Router basename="/SlotZi-marketing">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
