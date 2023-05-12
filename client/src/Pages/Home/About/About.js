import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="px-6 md:px-20 lg:px-40 md:py-12 my-20 overflow-hidden">
      <div className="text-center" data-aos="fade-up">
        <h6 className="capitalize text-xs">Get to know</h6>
        <h3 className="text-3xl text-[#58E3C4] font-bold mt-3 capitalize">
          About me
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center mt-20">
        <div className="mb-12 md:mb-0" data-aos="fade-right">
          <div
            className="w-[70%] h-96 rounded-3xl bg-gradient-to-r from-transparent mx-auto
          to-[#58E3C4] aspect-square"
          >
            <img
              src="https://i.ibb.co/mvFQ4Qp/shohan.jpg"
              className="w-full h-96 object-cover rounded-3xl rotate-[10deg] hover:rotate-0 overflow-hidden
               transition-all duration-200 ease-linear cursor-pointer"
              alt=""
            />
          </div>
        </div>

        <div data-aos="fade-left">
          <div>
            <h3 className="text-2xl font-semibold">Get to know</h3>
            <p className="mt-6 mb-12 text-slate-300">
              I'm a <strong>FullStack Web Developer </strong> building the Front-end and Backend of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the <strong>Projects</strong> section.
              <br /> <br/>
              I also like sharing content related to the stuff that I have
              learned over the years in <strong>Web Development</strong> so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my <Link tp="" className="text-[#58E3C4] font-bold underline">Linkedin</Link> where I post useful content related to Web Development
              and Programming
              <br /> <br/>
              I'm open to <strong>Job</strong> opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to <strong>contact</strong> me.
            </p>
          </div>
          <a
            className="bg-[#58E3C4] hover:bg-transparent hover:border text-black hover:text-white transition-all 
              duration-300 ease-linear py-2 px-6 rounded"
            href="/#contact"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
