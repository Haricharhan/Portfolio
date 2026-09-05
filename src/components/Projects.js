import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import ProjectsData from "./ProjectsData";

const ProjectDialog = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const image = project.images[currentImageIndex];
  const previousImage = () => setCurrentImageIndex((index) => (index - 1 + project.images.length) % project.images.length);
  const nextImage = () => setCurrentImageIndex((index) => (index + 1) % project.images.length);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 sm:p-6" role="presentation" onMouseDown={onClose}>
      <section className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-5 text-left shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onMouseDown={(event) => event.stopPropagation()}>
        <button ref={closeButtonRef} type="button" onClick={onClose} className="absolute right-4 top-4 rounded p-2 text-2xl text-gray-800 hover:bg-gray-100" aria-label="Close project details">
          <MdClose aria-hidden="true" />
        </button>
        <div className="pr-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FC4100]">Featured case study</p>
          <h2 id="project-dialog-title" className="text-2xl font-bold text-[#080831] sm:text-3xl">{project.name}</h2>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          <img src={image} alt={`${project.name} preview ${currentImageIndex + 1}`} className="max-h-[48vh] w-full object-contain" />
        </div>
        {project.images.length > 1 && (
          <div className="mt-3 flex items-center justify-center gap-3">
            <button type="button" onClick={previousImage} className="rounded-lg bg-[#080831] px-4 py-2 font-medium text-white hover:bg-[#1E3A8A]">Previous image</button>
            <span className="text-sm text-gray-600" aria-live="polite">{currentImageIndex + 1} of {project.images.length}</span>
            <button type="button" onClick={nextImage} className="rounded-lg bg-[#080831] px-4 py-2 font-medium text-white hover:bg-[#1E3A8A]">Next image</button>
          </div>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <h3 className="text-lg font-bold text-[#080831]">What I did</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{project.description}</p>
            <h3 className="mt-5 text-lg font-bold text-[#080831]">Key takeaways</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-700">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
          <aside className="rounded-xl bg-[#F4F8F8] p-5">
            <h3 className="font-bold text-[#080831]">Tools used</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tool) => <li key={tool} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#1E3A8A] shadow-sm">{tool}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#080831] px-4 py-2 font-medium text-white hover:bg-[#1E3A8A]"><FaGithub aria-hidden="true" /> View code</a>
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#080831] px-4 py-2 font-medium text-[#080831] hover:bg-white"><FaExternalLinkAlt aria-hidden="true" /> Live demo</a>}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const triggerRef = useRef(null);

  const closeDialog = () => {
    setSelectedProject(null);
    triggerRef.current?.focus();
  };

  return (
    <section className="body-font" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-5 py-12 text-center sm:px-8">
        <div id="projects" className="flex w-full flex-col items-center text-center">
          <h2 id="projects-heading" className="text-3xl font-semibold text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 text-lg font-medium text-dark-orange">Data analytics, ML monitoring, and useful automation</p>
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ProjectsData.map((project) => (
            <article key={project.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img src={project.image} alt={`${project.name} preview`} loading="lazy" className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-[#1E3A8A]">{project.icons.map((Icon, index) => <Icon key={index} className="text-xl" aria-hidden="true" />)}</div>
                <h3 className="mt-3 text-xl font-bold text-[#080831]">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tool) => <span key={tool} className="rounded-full bg-[#F4F8F8] px-2.5 py-1 text-xs font-medium text-[#1E3A8A]">{tool}</span>)}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <button ref={selectedProject?.id === project.id ? triggerRef : null} type="button" onClick={(event) => { triggerRef.current = event.currentTarget; setSelectedProject(project); }} className="rounded-lg bg-[#080831] px-4 py-2 text-sm font-medium text-white hover:bg-[#1E3A8A]">View case study</button>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-xl text-[#080831] hover:bg-[#F4F8F8]" aria-label={`View ${project.name} source code`}><FaGithub aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={closeDialog} />}
    </section>
  );
};

export default Projects;
