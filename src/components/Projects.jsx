"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";

function Projects({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterValue, setFilterValue] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const filtered = applyFilters(projects, filterValue);
    setFilteredProjects(filtered);
  }, [filterValue, projects]);

  const applyFilters = (data, filterValues) => {
    if (!filterValues || filterValues === "all") {
      return data;
    }

    return data.filter((project) =>
      project.techStack.some((tech) => filterValues === tech.trim())
    );
  };

  return (
    <section className="md:p-8 p-4 mt-10 relative" id="projects">
      {/* <SectionHeader title={"Projects"} /> */}
      <SectionHeading>
        <SlideIn className="text-white/40">PROJECTS</SlideIn>
      </SectionHeading>

      <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />

      <motion.div className="grid md:grid-cols-1 md:gap-6 gap-3 relative">

        {filteredProjects.map((project, projectIndex) => (
          <div key={projectIndex} className="mb-8">
            <div className="text-white">
              <span className="text-xl font-semibold mb-2 text-white/30">Title:</span> {project.title}
            </div>
            <div className="text-white">
              <span className="text-xl font-semibold mb-2 text-white/30">Description:</span> {project.description}
            </div>
            <SlideIn className="text-xl font-semibold mb-2 mt-2 text-white/40">KEY CONTRIBUTIONS :</SlideIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {project.keyContributions.map((contribution, index) => (
                <Card key={index} title={contribution.title} description={contribution.description} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;

const Card = ({ title, description }) => (
  <div className="bg-secondary/30 shadow-md rounded-lg p-4 mb-4 border border-gray-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white/30">{description}</p>
  </div>
);
