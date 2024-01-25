import React from "react";
import "../App.css";
import { Navbar } from "../components";
import {
  AboutUs,
  Header,
  SpecialMenu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "../container";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <Laurels />
      {/* <AboutUs /> */}
      <Gallery />
      {/* <SpecialMenu /> */}
      <Intro />
      <Chef />
      {/* <FindUs /> */}
      <Footer />
    </div>
  );
};

export default Home;
