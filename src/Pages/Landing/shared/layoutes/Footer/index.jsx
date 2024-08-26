import React from "react";

import styles from "./style.module.css";

import logo from "../../assets/images/logo_white.png";

import LinkedIn from "../../assets/images/social_linkedIn.png";
import Facebook from "../../assets/images/social_Facebook.png";
import Twitter from "../../assets/images/social_Twitter.png";

const LandingFooter = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.logoDiv}>
              <img src={logo} alt="Logo" />

              <p>
                Learning
                <br />
                Management System
              </p>
            </div>

            <div className={styles.navigation}>
              <p>About us</p>

              <p>Schools</p>

              <p>Teachers</p>
            </div>

            <div className={styles.social}>
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.contact}>
              <div>Contact us:</div>
              <p>Email: info@lms.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: Tashkent City Yashnabad district Muhammad al Khwarazmi
                school
              </p>
            </div>

            <div className={styles.email}>
              <input type="text" placeholder="Email" />

              <button>Subscribe to news</button>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>© 2024 LMS. All Rights Reserved.</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
