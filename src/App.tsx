import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Arena } from "./components/Arena";
import { Intro, About } from "./components/Intro";

const theme = createTheme({
  palette: {
    primary: { main: "#6385FF" },
    warning: { main: "#daa520" },
  },
});




function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/explain-agile">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/arena" element={<Arena />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
