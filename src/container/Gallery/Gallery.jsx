import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";
const imagesCollections = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title={"Instagram"} />
        <h1 className="headtext__cormorant"> Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAA", marginTop: "2rem", maxWidth: "500px" }}
        >
          At Serene, our online community thrives with a growing family of
          social media followers. Join us on platforms like Instagram for a
          visual feast, where we share the artistry behind each dish and offer a
          glimpse into the heart of our culinary haven.
        </p>
        <button type="button" className="custom__button">
          {" "}
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imagesCollections.map((image, index) => {
            return (
              <div
                key={index + 1}
                className="app__gallery-images_card flex__center"
              >
                <img src={image} alt="gallery image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
