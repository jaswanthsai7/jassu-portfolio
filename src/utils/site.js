const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-jassu-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Jaswanth Sai | Full Stack Developer",
  description: "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    github: "https://github.com/jaswanthsai7/jassu-portfolio",
  },
  mailSupport: "jasvanthsai7@gmail.com"
};

