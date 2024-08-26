import React from "react";

import styles from "./style.module.css";

const CaseStudies = () => {
  return (
    <>
      <div className={styles.caseStudies}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerTitle}>Case Studies</div>
            <div className={styles.headerSubtitle}>
              Explore Real-Life Examples of Our Proven Learning Management
              System Success through Our Case Studies
            </div>
          </div>
          <div className={styles.successStories}>
            <div className={styles.story}>
              <p className={styles.storyText}>
                We have implemented a targeted spending system in local schools,
                which has effectively eradicated bribery by providing detailed
                cost analysis.
              </p>
              <a href="#" className={styles.learnMore}>
                Learn more <span className={styles.arrow}>&#8594;</span>
              </a>
            </div>
            <div className={styles.story}>
              <p className={styles.storyText}>
                The arrival and departure of students were effectively managed
                by implementing a detailed student attendance plan, ensuring
                smooth and organized transitions.
              </p>
              <a href="#" className={styles.learnMore}>
                Learn more <span className={styles.arrow}>&#8594;</span>
              </a>
            </div>
            <div className={styles.story}>
              <p className={styles.storyText}>
                After developing teacher lesson schedules, it was identified
                that approximately 100 schools required additional personnel to
                meet educational needs.
              </p>
              <a href="#" className={styles.learnMore}>
                Learn more <span className={styles.arrow}>&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
