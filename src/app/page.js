import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { Transition } from "@/components/ui/Transitions";

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
    service_id,
    user_id,
    template_id
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
      <Contact email={email} social_handle={social_handles} about={about} service_id={service_id} user_id={user_id} template_id ={template_id}/>
    </main>
  );
}