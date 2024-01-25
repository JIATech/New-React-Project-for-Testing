import React from "react";
import { Navbar } from "../components";
import { Footer } from "../container";
import SignUp from "../components/Register/Signup";
const Register = () => {
  return (
    <div>
      <Navbar />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Register;
