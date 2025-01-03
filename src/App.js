import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import About from "./components/About";
import Home from "./components/Home";
import ImageCarousel from "./components/ImageCarousel";
import Gallery from "./components/Gallery";
import News from "./components/News";
import NavComponent from "./components/NavComponent";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/imagecarousel" element={<ImageCarousel />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
