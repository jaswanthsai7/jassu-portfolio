"use client";

import { ParallaxText } from "./ui/ParallaxText";


function Skills({ skills }) {
  return (
    <section id="skills">
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
