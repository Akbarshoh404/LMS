import React from "react";

import styles from "./style.module.css";

import img1 from "../../shared/assets/images/service1.png";
import img2 from "../../shared/assets/images/service2.png";
import img3 from "../../shared/assets/images/service3.png";
import img4 from "../../shared/assets/images/service4.png";

const Services = () => {
  return (
    <>
      <div className={styles.services}>
        <div className={styles.container}>
          <div className={styles.title}>
            <div className={styles.titleName}>Services</div>
            <div className={styles.titleText}>
              In our learning management system, we offer a number of services
              that help schools grow and succeed. These services include:
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.left}>
                <div className={styles.leftText}>
                  <span>Optimization of the</span>
                  <br />
                  <span>School system</span>
                </div>

                <div className={styles.leftButton}>
                  <svg
                    height="35"
                    viewBox="0 0 24 24"
                    width="35"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M14,11.4142136 L8.70710678,16.7071068 L7.29289322,15.2928932 L12.5857864,10 L9,10 L9,8 L16,8 L16,15 L14,15 L14,11.4142136 Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  Learn More
                </div>
              </div>

              <img src={img1} alt="" className={styles.right} />
            </div>

            <div className={styles.card}>
              <div className={styles.left}>
                <div className={styles.leftText}>
                  <span>Automation of</span>
                  <br />
                  <span>Teacher's salaries</span>
                </div>

                <div className={styles.leftButton}>
                  <svg
                    height="35"
                    viewBox="0 0 24 24"
                    width="35"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M14,11.4142136 L8.70710678,16.7071068 L7.29289322,15.2928932 L12.5857864,10 L9,10 L9,8 L16,8 L16,15 L14,15 L14,11.4142136 Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  Learn More
                </div>
              </div>

              <img src={img2} alt="" className={styles.right} />
            </div>

            <div className={styles.card}>
              <div className={styles.left}>
                <div className={styles.leftText}>
                  <span>Analitcs and</span>
                  <br />
                  <span>Tracking</span>
                </div>

                <div className={styles.leftButton}>
                  <svg
                    height="35"
                    viewBox="0 0 24 24"
                    width="35"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M14,11.4142136 L8.70710678,16.7071068 L7.29289322,15.2928932 L12.5857864,10 L9,10 L9,8 L16,8 L16,15 L14,15 L14,11.4142136 Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  Learn More
                </div>
              </div>

              <img src={img3} alt="" className={styles.right} />
            </div>

            <div className={styles.card}>
              <div className={styles.left}>
                <div className={styles.leftText}>
                  <span>Online communication</span>
                  <br />
                  <span>With teachers</span>
                </div>

                <div className={styles.leftButton}>
                  <svg
                    height="35"
                    viewBox="0 0 24 24"
                    width="35"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M14,11.4142136 L8.70710678,16.7071068 L7.29289322,15.2928932 L12.5857864,10 L9,10 L9,8 L16,8 L16,15 L14,15 L14,11.4142136 Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  Learn More
                </div>
              </div>

              <img src={img4} alt="" className={styles.right} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
