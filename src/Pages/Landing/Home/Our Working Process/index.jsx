import React, { useState } from "react";
import styles from "./style.module.css";

const OurWorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked accordion
  };

  const accordionData = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss the educational system and staff of your school, their salary, the amount of teachers and students. This will allow you to understand your needs and adapt our services to your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "In the planning phase, we will outline the strategies and steps needed to achieve your goals.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "This is where the plans are put into action with careful coordination and execution.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "During the initial consultation, we will discuss the educational system and staff of your school, their salary, the amount of teachers and students. This will allow you to understand your needs and adapt our services to your requirements.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "In the planning phase, we will outline the strategies and steps needed to achieve your goals.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "This is where the plans are put into action with careful coordination and execution.",
    },
  ];

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
