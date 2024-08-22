import React from "react";

import styles from "./style.module.css";

import img from "../../shared/assets/images/form-img.png";

const ContactUs = () => {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.title}>
            <div className={styles.titleName}>Contact Us</div>
            <div className={styles.titleText}>
              Connect with Us: Let's Discuss Your School’s Learning Management
              System
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.form2}>
              <div>
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.input1}
                />
              </div>

              <div>
                <p>Email</p>
                <input
                  type="text"
                  placeholder="Email"
                  className={styles.input1}
                />
              </div>

              <div>
                <p>Message</p>
                <input
                  type="text"
                  placeholder="Message"
                  className={styles.input2}
                />
              </div>

              <button>Send Message</button>
            </div>

            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
