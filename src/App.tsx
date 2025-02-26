import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";


import { Arena } from "./components/Arena";
import { Intro, About } from "./components/Intro";

function App() {
  return (
    <Router basename="/explain-agile">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/arena" element={<Arena />} />
      </Routes>
    </Router>
  );
}

export default App;
