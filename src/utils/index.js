import {
  siteConfig
} from "./site.js";

export const formatDate = (date) => {
  const newDate = new Date(date);

  const month = newDate.toLocaleString("en-US", {
    month: "2-digit"
  }); // Full month name
  const year = newDate.getFullYear();

  return {
    month,
    year
  };
};

export function constructMetadata({
  title,
  description,
  image,
  icons = "/favicon.ico",
  noIndex = false,
  url
}) {
  return {
    title,
    description,
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Node.js Developer",
      "Portfolio",
      "Projects",
      "Skills",
    ],
    authors: [{
      name: "Jaswanth",
    }, ],
    creator: "Jaswanth",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: url,
      title,
      description,
      siteName: title,
    },
    icons,
    metadataBase: url ? new URL(url) : new URL("https://default-url.com"),
    manifest: `${  url
}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}