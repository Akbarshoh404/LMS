import React from "react";

import Navbar from "../shared/layoutes/Navbar/index";
import Header from "./Header/index";
import Services from "./Services/index";
import OurWorkingProcess from "./Our Working Process/index";
import CaseStudies from "./Case Studies/index";
import ContactUs from "./Contact Us/index";
import Teachers from "./Teachers";
import Footer from "../shared/layoutes/Footer/index";

import styles from "./style.module.css";

const LandingHome = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <OurWorkingProcess />
      <CaseStudies />
      <Teachers />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingHome;
