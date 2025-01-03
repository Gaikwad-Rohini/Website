import React from "react";
import news1 from "C:/Vaibhav/Website/src/images/news1.jpg";
import news2 from "C:/Vaibhav/Website/src/images/news2.jpg";
import news3 from "C:/Vaibhav/Website/src/images/news3.jpg";
import news4 from "C:/Vaibhav/Website/src/images/news4.jpg";

const News = () => {
  return (
    <>
      <div className="element-container">
        <h2 className="heading-title">News</h2>
      </div>
      <div className="news-img">
        <div>
          <img src={news1} alt="image1" width="300px" />
        </div>
        <div>
          <img src={news2} alt="image2" width="300px" />
        </div>
        <div>
          <img src={news3} alt="image3" width="300px" />
        </div>
        <div>
          <img src={news4} alt="image4" width="300px" />
        </div>
      </div>
    </>
  );
};

export default News;
