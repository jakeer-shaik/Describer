import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageInfo from "./pages/ImageInfo";
import Information from "./pages/Information";
import About from "./components/about/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-info" element={<ImageInfo />} />
        <Route path="/information" element={<Information />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
