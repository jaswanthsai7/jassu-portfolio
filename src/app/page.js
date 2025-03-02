import Hero from "@/components/hero";

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
      <Hero about={about} />
    </main>
  );
}