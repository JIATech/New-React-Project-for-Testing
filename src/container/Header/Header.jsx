import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new falvour" />
      <h1 className="app__header-h1">Artistry on Every Plate</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        where every visit is a symphony of flavors and a journey through
        exquisite tastes. Situated in the heart of elegance, our restaurant
        Serene, invites you to experience the art of fine dining
      </p>
      <Link to="/menu">
        <button className="custom__button">Explore Menu</button>
      </Link>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" className="header-img" />
    </div>
  </div>
);

export default Header;
