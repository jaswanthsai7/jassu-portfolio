"use client";

import { ParallaxText } from "./ui/ParallaxText";
import { SectionHeading } from "./ui/Typography";
import { SlideIn } from "./ui/Transitions";

function Skills({ skills }) {
  return (
    <section id="skills">
      {/* <div className="md:p-8 p-4">
        <SectionHeader title={"Skills"} />
      </div> */}
      <SectionHeading className="pl-4 md:px-12 py-20">
        <SlideIn className="text-white/40">SKILLS</SlideIn>

      </SectionHeading>
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill) =>
          skill.enabled ? (
            <span
              key={skill._id}
              className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        {skills.map((skill) =>
          skill.enabled ? (
            <span
              key={skill._id}
              className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill) =>
          skill.enabled ? (
            <span
              key={skill._id}
              className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter"
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>
    </section>
  );
}

export default Skills;
