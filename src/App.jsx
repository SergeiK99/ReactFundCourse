import React, { useState, useMemo, useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter, Link, Route, Routes} from "react-router";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;