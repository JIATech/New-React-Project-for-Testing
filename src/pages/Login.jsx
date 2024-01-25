import React from "react";
import { Navbar } from "../components";
import { Footer } from "../container";
import SignIn from "../components/Login/Signin";

const Login = () => {
  return (
    <div>
      <Navbar />
      <SignIn />
      <Footer />
    </div>
  );
};

export default Login;
