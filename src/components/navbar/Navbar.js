import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/GPT-3.svg";
import { Link } from "react-router-dom";
const Menu = () => (
  <>
    <p>
      <a href="/">Home</a>
    </p>
    <p>
      <a href="/wgpt">What is Gpt?</a>
    </p>
    <p>
      <a href="/possibility">open AI</a>
    </p>
    <p>
      <a href="/features">Case Studies</a>
    </p>
    <p>
      <a href="/blog">Library </a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setTogggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links__container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button className="btn" type="button">
            Sign up
          </button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setTogggleMenu(false)}
            />
          ) : (
            <RiMenu3Fill
              color="#fff"
              size={27}
              onClick={() => setTogggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu__container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button className="btn" type="button">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
