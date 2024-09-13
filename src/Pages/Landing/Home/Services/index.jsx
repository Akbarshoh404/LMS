import ArrowIcon from "../../shared/assets/icons/ArrowIcon";
import styles from "./style.module.css";

import { serviceCards } from "../../shared/utils/index";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionTitleContainer}>
          <h2 className={styles.sectionTitle}>About us</h2>
        </div>
        <div className={styles.servicesDescription}>
          <h3 className={styles.titleName}>Services</h3>
          <p className={styles.titleText}>
            In our learning management system, we offer a number of services
            that help schools grow and succeed. These services include:
          </p>
        </div>
        <div className={styles.cards}>
          {serviceCards.map((card, index) => {
            return (
              <div key={card.name} className={styles.card}>
                <div className={styles.left}>
                  <h6
                    className={`${styles.cardTitle} ${
                      index === 1 || index === 2 ? styles.odd : styles.even
                    }`}
                  >
                    {card.name}
                  </h6>
                  <button className={styles.cardButton}>
                    <ArrowIcon />
                    <span>Learn more</span>
                  </button>
                </div>
                <img
                  src={card.image}
                  alt="service"
                  className={styles.right}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
