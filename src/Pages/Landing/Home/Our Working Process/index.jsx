import { useState } from "react";
import styles from "./style.module.css";
import { accordionData } from "@/lib/constants";

const OurWorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked accordion
  };

  return (
    <div className={styles.working}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>Our Working Process</div>
          <div className={styles.headerSubtitle}>
            Step-by-step guide to improve education system in your school
          </div>
        </div>

        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`${styles.accordionItem} ${
              openIndex === index ? styles.accordionItemOpen : ""
            }`}
          >
            <div
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.accordionNumber}>{item.number}</div>
              <div className={styles.accordionTitle}>{item.title}</div>
              <div className={styles.accordionToggle}>
                {openIndex === index ? "-" : "+"}
              </div>
            </div>
            {openIndex === index && (
              <div className={styles.accordionContent}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkingProcess;
