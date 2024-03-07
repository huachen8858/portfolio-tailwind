import React from "react";
import ProjectCard from "./project-card";
import projectsData from "@/data/project-data";

export default function ProjectSection() {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button className="rounded-full border-2 border-blue-300 px-6 py-3 text-xl cursor-pointer">All</button>
        <button className="rounded-full border-2 border-slate-600 px-6 py-3 text-xl cursor-pointer hover:border-white">Web</button>
        <button>Mobile</button>
      </div>
      <div className="grid md:grid-col-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
}
