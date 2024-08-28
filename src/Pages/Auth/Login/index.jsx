import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles.body}>
        <div className={styles.loginContainer}>
          <h1>Login</h1>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Username" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="password" placeholder="Password" required />
          </div>
          <button
            className={styles.loginButton}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <div className={styles.footer}>
            <p>
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
