import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.css";
const SignIn = () => {
  const [data, setData] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    //     if (email && password) {
    //       const res = await axios.post(
    //         `https://my-ecommerce-bkends.onrender.com/users/login`,
    //         {
    //           email: email,
    //           password: password,
    //         }
    //       );
    //       if (res?.data) {
    //       } else {
    //         console.log("something went wrong");
    //       }
    //     }
  };
  return (
    <motion.div className="mother-container">
      <div
        className="container"
        variants={{
          hidden: { opacity: 0, y: 100, x: 0 },
          enter: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate="enter"
        // transition={{ type: "linear" }}
        // initial="hidden"
        // animate="visible"
        transition={{
          type: "spring", // You can choose a different transition type
          stiffness: 30, // Adjust the stiffness
          // damping: 20, // Adjust the damping
          //     delay: 0.6,
        }}
      >
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <FaUserCircle className="user-icon" />

                <input
                  type="text"
                  className="login__input"
                  placeholder="Email"
                  v-model="email"
                />
                <br />
              </div>
              <div className="login__field">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="user-icon w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>

                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <button type="submit" className="button login__submit">
                Log In
              </button>
            </form>
            <div className="social-login">
              {/* <router-link to="/register" className="link"> */}
              <Link to={"/register"}>
                <h3 className="light">Sign up</h3>
              </Link>
              {/* </router-link> */}
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;
