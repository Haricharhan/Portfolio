import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div id="projects" className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            Projects
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg font-medium leading-relaxed text-dark-orange">
            My Works
          </p>
        </div>
        {/* Projects Grid */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 mt-6">

          {[...ProjectsData].reverse().map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              className="group relative h-80 w-[95%] mx-auto shadow-xl rounded-xl cursor-pointer"
            >
              <div className="h-80 w-full flex flex-col items-center justify-center 
                bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] 
                rounded-xl p-4 
                hover:scale-105 transition duration-300">

                  <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                    {project.name}
                  </h2>

                  <div className="flex gap-3 mt-4">
                    {project.icons?.map((Icon, index) => (
                      <Icon key={index} className="text-white text-3xl" />
                    ))}
                  </div>

                </div>
              {/* Hover overlay */}
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-all duration-500 bg-darkblue rounded-xl">

                <h3 className="text-xl font-medium text-white my-2">{project.name}</h3>

                <p className="px-2 text-sm text-white text-center">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-3">
                  {project?.icons?.map((Icon, index) => (
                    <Icon key={index} className="text-white text-3xl" />
                  ))}
                </div>

                <div className="flex gap-5 mt-4 text-xl">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
                    <FaGithub />
                  </a>

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ✅ MODAL (OUTSIDE MAP) */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

            <div className="bg-white w-[90%] lg:w-[75%] h-[80%] rounded-xl relative p-5 flex flex-col items-center">

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-5 text-2xl font-bold"
              >
                ✖
              </button>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-3">
                {selectedProject.name}
              </h2>

              {/* Image */}
              <img
                src={selectedProject.images[currentImageIndex]}
                alt="project"
                className="max-h-[60%] rounded-lg"
              />

              {/* Controls */}
              <div className="flex gap-5 mt-4">
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0
                        ? selectedProject.images.length - 1
                        : prev - 1
                    )
                  }
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Prev
                </button>

                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === selectedProject.images.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>

              {/* Description */}
              <p className="mt-4 text-center px-5">
                {selectedProject.description}
              </p>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
