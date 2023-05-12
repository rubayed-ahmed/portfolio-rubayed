import React, {} from "react";
import Header from "../Pages/Shared/Header/Header";
import Banner from "../Pages/Home/Banner/Banner";
import About from "../Pages/Home/About/About";
import Experience from "../Pages/Home/Experience/Experience";
import Works from "../Pages/Home/Works/Works";
import Contact from "../Pages/Home/Contact/Contact";
import Footer from "../Pages/Shared/Footer/Footer";
import GoToTop from "../Pages/GoToTop";

const Main = () => {
  return (
    <div>
        <Header />
        <Banner />
        <About/>
        <Experience/>
        <Works/>
        <Contact/>
        <GoToTop/>
        <Footer/>
    </div>
  );
};

export default Main;
