"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { SlideIn } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import { ParallaxScrollImages } from "@/utils/ParallaxScrollImages";

function Projects({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const filtered = applyFilters(projects, filterValue);
    setFilteredProjects(filtered);
  }, [filterValue, projects]);

  const applyFilters = (data, filterValue) => {
    if (!filterValue || filterValue === "all") return data;
    return data.filter((project) =>
      project.techStack.some((tech) => filterValue === tech.trim())
    );
  };

  return (
    <section className="md:p-8 p-4 mt-10 relative" id="projects">
      <SectionHeading>
        <SlideIn className="text-white/40">PROJECTS</SlideIn>
      </SectionHeading>

      <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />

      <motion.div className="grid md:grid-cols-1 md:gap-10 gap-6 relative">
        {filteredProjects.map((project, projectIndex) => (
          <div key={projectIndex} className="mb-16 border border-white/10 bg-white/5 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>

            <div className="mt-2 text-white/70">{project.description}</div>

            <div className="mt-3 text-sm text-white/60">
              <strong>Duration:</strong> {project.date}
            </div>

            {project.liveLink && (
              <div className="mt-2 text-blue-400">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  🔗 Live Project
                </a>
              </div>
            )}
            {project.githubLink && (
              <div className="text-blue-400">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  💻 GitHub Repo
                </a>
              </div>
            )}

            <div className="mt-4 text-white/80">
              <strong>Tech Stack:</strong> {project.techStack.join(", ")}
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-4">
                <SlideIn className="text-xl font-semibold text-white/40">Highlights</SlideIn>
                <ul className="list-disc list-inside mt-2 text-white/60 space-y-1">
                  {project.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Contributions block (if using keyContributions) */}
            {project.keyContributions && (
              <div className="mt-6">
                <SlideIn className="text-xl font-semibold mb-2 mt-2 text-white/40">Key Contributions:</SlideIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {project.keyContributions.map((contribution, index) => (
                    <Card key={index} title={contribution.title} description={contribution.description} />
                  ))}
                </div>
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="mt-6 overflow-hidden">
                <SlideIn className="text-xl font-semibold text-white/40">Screenshots</SlideIn>
                <ParallaxScrollImages images={project.images} scrollSpeed={60} direction="right" />
              </div>
            )}


          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;

const Card = ({ title, description }) => (
  <div className="bg-secondary/30 shadow-md rounded-lg p-4 border border-gray-300">
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-white/50">{description}</p>
  </div>
);
