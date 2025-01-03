import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "C:/Vaibhav/Website/src/images/1.jpg";
import img2 from "C:/Vaibhav/Website/src/images/2.jpg";
import img3 from "C:/Vaibhav/Website/src/images/3.jpg";
import img4 from "C:/Vaibhav/Website/src/images/4.jpg";
import img5 from "C:/Vaibhav/Website/src/images/5.jpg";
import img6 from "C:/Vaibhav/Website/src/images/6.jpg";
import img7 from "C:/Vaibhav/Website/src/images/7.jpg";
import img8 from "C:/Vaibhav/Website/src/images/8.jpg";
import img9 from "C:/Vaibhav/Website/src/images/9.jpg";
import img10 from "C:/Vaibhav/Website/src/images/10.jpg";
import img11 from "C:/Vaibhav/Website/src/images/11.jpg";
import img12 from "C:/Vaibhav/Website/src/images/12.jpg";
import img13 from "C:/Vaibhav/Website/src/images/13.jpg";
import img14 from "C:/Vaibhav/Website/src/images/14.jpg";
import img15 from "C:/Vaibhav/Website/src/images/15.jpg";
import img16 from "C:/Vaibhav/Website/src/images/16.jpg";
import img17 from "C:/Vaibhav/Website/src/images/17.jpg";
import img18 from "C:/Vaibhav/Website/src/images/18.jpg";
const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="element-container">
        <h2 className="heading-title">Endorsements</h2>
      </div>
      <section className="top-section">
        <div className="element-top">
          <p>
            Swwapnil believes that as an actor he has a social responsibility
            and since he inspires the younger generation and is loved by family
            audiences across the globe, he makes sure that his brand
            endorsements embodies a healthy and happy image. Some of the major
            brands he endorses are Lodha Regalia, Meesho, Naqsh Clothing, Rajyog
            Paints, Sheraton Grand Pune, BIIPCB, TJSB, TATASKY, Max Fashion,
            Johnson & Johnson, Gillette, Wonderchef, Daniel Wellington,
            Richfeel, Sharechat, Protein X, SHEMAROO, OPPO, PNG Jewellers, SP
            Finance academy of India, exympower etc.
          </p>
        </div>
      </section>
      <section className="swiper-section">
        <div className="e-swiper-container">
          <div
            className="elementor-image-carousel-wrapper swiper-container swiper-container-initialized swiper-container-horizontal"
            dir="ltr"
          >
            <div className="elementor-widget-container"></div>
          </div>
        </div>
      </section>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="image1" />
          </div>
          <div>
            <img src={img2} alt="image2" />
          </div>
          <div>
            <img src={img3} alt="image3" />
          </div>
          <div>
            <img src={img4} alt="image4" />
          </div>
          <div>
            <img src={img5} alt="image5" />
          </div>
          <div>
            <img src={img6} alt="image6" />
          </div>
          <div>
            <img src={img7} alt="image7" />
          </div>
          <div>
            <img src={img8} alt="image8" />
          </div>
          <div>
            <img src={img9} alt="image9" />
          </div>
          <div>
            <img src={img10} alt="image10" />
          </div>
          <div>
            <img src={img11} alt="image11" />
          </div>
          <div>
            <img src={img12} alt="image12" />
          </div>
          <div>
            <img src={img13} alt="image13" />
          </div>
          <div>
            <img src={img14} alt="image14" />
          </div>
          <div>
            <img src={img15} alt="image15" />
          </div>
          <div>
            <img src={img16} alt="image16" />
          </div>
          <div>
            <img src={img17} alt="image17" />
          </div>
          <div>
            <img src={img18} alt="image18" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageCarousel;
