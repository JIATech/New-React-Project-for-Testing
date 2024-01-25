import React from "react";
import { Navbar } from "../components";
import { AboutUs, Chef, Footer, Gallery } from "../container";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Chef />
      <Footer />
    </div>
  );
};

export default About;
