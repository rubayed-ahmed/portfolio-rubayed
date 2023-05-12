import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchDataFromApi } from "../../../utils/api";

const Works = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("https://shohan-portfolio-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);



  return (
    <section className="px-6 md:px-20 lg:px-40 md:py-12 my-20" id="works">
      <div className="text-center" data-aos="fade-up">
        <h6 className="capitalize text-xs">My Recent</h6>
        <h3 className="text-3xl text-[#58E3C4] font-bold mt-3 capitalize">
          Projects
        </h3>
      </div>

      <div className="mt-20" data-aos="fade-up">
        {projects?.map((project) => (
          <div className="flex flex-col lg:flex-row justify-center gap-x-24 mb-24 items-center">
            <div className="lg:basis-[50%]">
              <img
                src={project?.img}
                alt=""
                className="lg:max-w-[50vw] h-[50vh] rounded object-cover"
              />
            </div>
            <div className="lg:basis-[50%] text-center md:text-left">
              <h2 className="text-2xl font-semibold mt-12 lg:mt-0">
                {project?.project_name}
              </h2>
              <p className="text-slate-300 my-6 leading-8">
                {project?.project_overview.slice(0, 150)}
              </p>
              <Link
                to={`/project/${project?._id}`}
                className="bg-[#58E3C4] hover:bg-transparent hover:border text-black hover:text-white transition-all 
              duration-300 ease-linear py-2 px-6 rounded inline-block"
              >
                Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
