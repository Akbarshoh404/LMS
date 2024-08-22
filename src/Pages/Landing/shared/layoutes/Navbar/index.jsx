// src/Navbar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoDiv}>
          <img src={logo} alt="Logo" />

          <p>
            Learning
            <br />
            Management System
          </p>
        </div>

        <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
          <a href="#home">About us</a>
          <a href="#about">Schools</a>
          <a href="#services">Teachers</a>
          <a
            className={styles.loginButton}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </a>
          <a className={styles.registerButton}>Sign Up</a>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
