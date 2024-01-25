import React from "react";
import { Navbar } from "../components";
import { Footer, Gallery, Intro, Laurels, SpecialMenu } from "../container";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <SpecialMenu />
      <Laurels />
      <Gallery />
      <Intro />
      <Footer />
    </div>
  );
};

export default Menu;
