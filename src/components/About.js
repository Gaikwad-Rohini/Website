import ReactPlayer from "react-player";
import React, { useRef } from "react";

import SwapImg1 from "C:/Vaibhav/Website/src/images/Swapnil.jpg";
const VIDEO_PATH = "https://www.youtube.com/embed/BZWyqF0rL0o";
const About = () => {
  const playerRef = useRef(null);
  return (
    <>
      <div>
        <h2 className="first-class">About</h2>
      </div>
      <section className="about-section">
        <div className="split left">
          <img src={SwapImg1} alt="SwapImg1" className="img" />
        </div>
        <div className="split right">
          <p>
            To be alive and being able to do good work is a privilege that
            Swwapnil believes in thoroughly and so he never takes his work or
            family for granted. Cutting corners in his work is something he
            absolutely abhors and when his hard work pays off , he enjoys
            spending that not only on his family but feels it is his
            responsibility to give back to the society in his own humble ways .
            Born to a middle class family in Mumbai, Swwapnil enjoys a simple
            life. He loves to sleep in, spend time with his kids and family. A
            lawyer by education, an avid reader of all kinds of literature since
            a very young age, Swwapnil genuinely believes that books are a man’s
            best friend. Although actors are needed to be fitness buffs,
            Swwapnil says he doesn’t enjoy hardcore workouts and gyms but
            nevertheless believes fitness should be a part of everyone’s life
            and so unless a role demands him to be super fit he loves his
            regular walks and yoga which keep his happy hormones flowing.
          </p>
        </div>
      </section>
      <div className="second-class">
        Upcoming Movie
        <span className="pa-callout-right">
          <sup>New</sup>
        </span>
      </div>
      <div className="relative">
        <ReactPlayer
          ref={playerRef}
          url={VIDEO_PATH}
          controls={true}
          width="100%"
        />
      </div>
    </>
  );
};

export default About;
