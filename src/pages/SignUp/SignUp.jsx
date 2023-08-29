import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { UserContext } from '../../contexts/UserContext';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Signup() {
  const { token } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("https://cinetrail-server.herokuapp.com/users/signup", {
        email,
        password,
        username,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 409) {
          setMessage("Sorry, this email is already in use!");
        } else {
          setSignupSuccess(true);
          setEmail("");
          setUsername("");
          setPassword("");
          navigate("/"); // Use navigate for navigation
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className={darkMode ? "signup-container" : "signup-container signup-light"}>
      {token ? (
        <p>You are already logged in.</p>
      ) : (
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="title-container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
          </div>
          <div className={darkMode ? "input-wrapper" : "input-wrapper input-wrapper-light"}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={darkMode ? "input-wrapper" : "input-wrapper input-wrapper-light"}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={darkMode ? "input-wrapper" : "input-wrapper input-wrapper-light"}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <button type="reset" className="cancelbtn" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
          {signupSuccess ? (
            <p className="success-message">
              Signed up successfully! <Link to="/signin">Sign in</Link>
            </p>
          ) : message ? (
            <p>{message}</p>
          ) : (
            <p className="signin-message">
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          )}
        </form>
      )}
    </div>
  );
}
