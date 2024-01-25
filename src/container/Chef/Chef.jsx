import React from 'react';

import './Chef.css';
import {SubHeading } from '../../components';
import {images} from '../../constants'
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chief img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={"Chef's Word"} />
      <h1 className="headtext__cormorant">What we Belive In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="cheif-words">
            {" "}
            <img src={images.quote} alt="quote" />
            We @ Serene Innovate, Elevate and Master.
          </p>
          <p className="cheif-words">
            Meet Chef Kevin, a culinary virtuoso who transforms every dish into
            a masterpiece of flavor and innovation.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="cheif-words">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
