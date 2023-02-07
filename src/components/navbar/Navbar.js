import React from "react";
import "./navbar.css";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/GPT-3.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links__container">
          <a href="/">Home</a>
          <a href="/wgpt">What is Gpt?</a>
          <a href="/possibility">open AI</a>
          <a href="/features">Case Studies</a>
          <a href="/blog">Library </a>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button className="btn" type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
