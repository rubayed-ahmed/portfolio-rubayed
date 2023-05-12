import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const [experience, setExperience] = useState();
  const [exBackend, setExBackend] = useState();

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    fetch("https://shohan-portfolio-server.vercel.app/experiences")
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  useEffect(() => {
    fetch("https://shohan-portfolio-server.vercel.app/backendExperiences")
      .then((res) => res.json())
      .then((data) => setExBackend(data));
  }, []);

  return (
    <section className="px-6 md:px-20 lg:px-40 md:py-12 my-20" id="experience">
      <div className="text-center" data-aos="fade-up">
        <h6 className="capitalize text-xs">What skills i have</h6>
        <h3 className="text-3xl text-[#58E3C4] font-bold mt-3 capitalize">
          Experience
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center mt-20" data-aos="fade-up">

        <div className="border border-gray-400 rounded-3xl text-center min-h-full" >
          <h3 className="text-[#58E3C4] font-bold my-6 text-xl">
            Frontend Development
          </h3>
          <ul className="px-12 grid grid-cols-1 md:grid-cols-2 justify-center gap-x-6">
            {experience?.map((ex) => (
            <li className="flex text-left gap-3 lg:gap-6 justify-start my-4">
            <span className="text-[#58E3C4] text-lg">
              <FaCheckCircle />
            </span>
            <div>
              <h4 className="text-lg">{ex?.skill}</h4>
              <small className="text-sm text-slate-400">{ex?.level}</small>
            </div>
          </li>
            ))}
          </ul>
        </div>

        <div className="border border-gray-400 rounded-3xl text-center min-h-full">
          <h3 className="text-[#58E3C4] font-bold my-6 text-xl">
            Backend Development
          </h3>
          <ul className="px-12 grid grid-cols-1 md:grid-cols-2 justify-center">
            {exBackend?.map((ex) => (
            <li className="flex text-left gap-6 justify-start my-4">
            <span className="text-[#58E3C4] text-lg">
              <FaCheckCircle />
            </span>
            <div>
              <h4 className="text-lg">{ex?.skill}</h4>
              <small className="text-sm text-slate-400">{ex?.level}</small>
            </div>
          </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
