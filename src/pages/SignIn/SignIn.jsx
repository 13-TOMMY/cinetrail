import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./SignIn.css";
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';

export default function Signin() {
  const navigate = useNavigate();
  const { user, setUser, token, setToken } = useContext(UserContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
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
          setMessage("sorry, this email is already in use!");
        } else {
          setSignupSuccess(true);
          setEmail("");
          setUsername("");
          setPassword("");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="title-container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
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
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="button-container">
            <button type="reset" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
          {signupSuccess ? (
            <p className="success-message">You signed up successfully!</p>
          ) : message ? (
            <p>{message}</p>
          ) : (
            <p>Something went wrong, try again later</p>
          )}
        </div>
      </form>
    </div>
  );
}
