import React, { useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import deved from "../../../assets/dev-ed-wave.png";
import "./Banner.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchDataFromApi } from "../../../utils/api";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    getProducts();
}, []);

const getProducts = () => {
    fetchDataFromApi("/api/projects?populate=*").then((res) => {
      console.log(res)
    });
};



  return (
    <section id="home" data-aos="fade-down">
      <div className="md:px-20 lg:px-40 md:py-12">
        <div className="relative">
          <div className="text-center p-10 py-10">
            <span className="text-lg">Hey, I'm</span>
            <h2 className="text-4xl md:text-6xl py-2 text-[#58E3C4] font-medium leading-8 capitalize">
              Salahddin Khan Shohan
            </h2>
            <h3 className="text-md md:text-xl py-2 dark:text-white">
              Web Designer & Developer
            </h3>
            <p
              className="text-md py-5 leading-8 text-slate-400 dark:text-gray-200 max-w-xl mx-auto 
            md:text-lg"
            >
              A Fullstack Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
            <div className="flex justify-center gap-6 py-3">
              <a
                className="bg-[#58E3C4] text-black transition-all 
              duration-300 ease-linear py-2 px-6 rounded "
                href="resume.pdf"
                download="resume.pdf">
                Resume
              </a>
              <a
                href="/#works"
                className="border text-[#58E3C4] hover:bg-[#58E3C4] hover:text-black transition-all duration-300 ease-linear py-2 px-6 rounded"
              >
                Projects
              </a>
            </div>

            <div
              data-aos="fade-top"
              className="mx-auto bg-gradient-to-b from-[#58E3C4] rounded-full w-80 h-80 
            relative overflow-hidden mt-8 md:h-96 md:w-96 "
            >
              <img
                src={deved}
                layout="fill"
                objectFit="cover"
                alt=""
                className="mt-24"
              />
            </div>

            <ul className="social absolute top-[50%] left-[5%] md:left-0">
              <Link
                to="https://www.linkedin.com/in/rubayed-ahmed-a7b49121b/"
                target="_blank"
                className="my-4 block text-xl md:text-2xl text-[#58E3C4] cursor-pointer hover:text-white transition-all
                 duration-300 ease-linear"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://github.com/rubayed-ahmed"
                target="_blank"
                className="my-4 block text-xl md:text-2xl text-[#58E3C4] cursor-pointer hover:text-white transition-all
                 duration-300 ease-linear"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.facebook.com/ShohanKhanDBZ"
                target="_blank"
                className="my-4 block text-xl md:text-2xl text-[#58E3C4] cursor-pointer hover:text-white transition-all 
                duration-300 ease-linear"
              >
                <FaFacebook />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
