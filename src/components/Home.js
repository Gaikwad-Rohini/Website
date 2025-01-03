import SwapImg from "C:/Vaibhav/Website/src/images/slider-with-name.jpg";
import React from "react";
import About from "./About";
import ImageCarousel from "./ImageCarousel";
import Gallery from "./Gallery";
import News from "./About";

const Home = () => {
  return (
    <>
      <div className="container">
        <img src={SwapImg} alt="SwapImg" />
      </div>
      <About />
      <ImageCarousel />
      <Gallery />
      <News />
    </>
  );
};

export default Home;
