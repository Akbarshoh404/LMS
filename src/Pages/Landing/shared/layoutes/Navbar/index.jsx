import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>
            Learning
            <br />
            Management System
          </p>
        </div>
        <ul className={styles.navList}>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Schools</a>
          </li>
          <li>
            <a href="#">Teachers</a>
          </li>
          <a
            className={styles.loginButton}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </a>
          <a className={styles.registerButton}>Sign Up</a>
        </ul>
        <div
          className={`${styles.hamburger} ${
            isMenuActive ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMenu}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </nav>
      <div className={`${styles.menubar} ${isMenuActive ? styles.active : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
