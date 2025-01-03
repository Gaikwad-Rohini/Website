import React from "react";
import image1 from "C:/Vaibhav/Website/src/images/img-gallery4.jpeg";
import image2 from "C:/Vaibhav/Website/src/images/img-gallery3.jpeg";
import image3 from "C:/Vaibhav/Website/src/images/img-gallery2.jpeg";
import image4 from "C:/Vaibhav/Website/src/images/img-gallery5.jpg";
import image5 from "C:/Vaibhav/Website/src/images/img-gallery1.jpg";
const Gallery = () => {
  return (
    <>
      <div className="element-container">
        <h2 className="heading-title">Gallery</h2>
      </div>
      <div className="wrapper">
        <div className="first-img">
          <img src={image1} alt="image1" width="200px" />
        </div>
        <div>
          <img src={image2} alt="image2" width="200px" />
        </div>
        <div>
          <img src={image3} alt="image3" width="200px" />
        </div>
        <div>
          <img src={image4} alt="image4" width="200px" />
        </div>
        <div>
          <img src={image5} alt="image5" width="200px" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
