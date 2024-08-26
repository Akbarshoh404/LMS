import React from "react";

import styles from "./style.module.css";

import img from "../../shared/assets/images/header.png";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>
              Learning
              <br /> Management
              <br /> System (LMS)
            </h1>

            <p>
              The purpose of our System is to provide a centralized platform for
              efficient course administration, personalized learning
              experiences, collaboration, tracking learner progress, generating
              insights through analytics, and facilitating compliance training.
            </p>

            <button>Let's try</button>
          </div>

          <img className={styles.right} src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
