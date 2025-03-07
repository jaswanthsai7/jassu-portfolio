import About from "../../src/components/About";
import Contact from "../../src/components/Contact";
import Header from "../../src/components/Header";
import Hero from "../../src/components/hero";
import Projects from "../../src/components/projects";
import Skills from "../../src/components/Skills";
import Timeline from "../../src/components/Timeline";
import { Transition } from "../../src/components/ui/Transitions";

export default async function Home() {
  const portfolio = (await import("../../dummy.json")).default;

  const {
    about,
    testimonials,
    services,
    skills,
    projects,
    social_handles,
    timeline,
    email,
  } = portfolio;

  return (
    <main className="relative">
        <Transition>
                      <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
        </Transition>
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Timeline timeline={timeline}/>
      <Skills skills={skills}/>
      <Projects projects={projects} />
      <Contact email={email} social_handle={social_handles} about={about} />
    </main>
  );
}