import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";
const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spooon" className="spoon__img" />
        <p className="p__opensans">
          Serene, established in 1996, is where culinary artistry and tranquil
          ambiance converge. Our chef's mastery and commitment to excellence
          define a dining experience that's a symphony of flavors and
          perfection.
        </p>
        <button className="about-know" type="button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" className="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spooon" className="spoon__img" />
        <p className="p__opensans">
          Since 2000, Serene has been a culinary icon, uniting the vision of a
          master chef with a commitment to unparalleled excellence. Our artful
          dishes, crafted with the finest ingredients, invite you to savor the
          epitome of gastronomic sophistication in a serene setting.
        </p>
        <button className="about-know" type="button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
