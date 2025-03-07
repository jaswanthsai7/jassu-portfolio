import { Poppins } from "next/font/google";
import "./globals.css";
import { VariantProvider } from "@/utils/hooks";
import { constructMetadata } from "@/utils";
import {
  siteConfig
} from "../utils/site.js";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = constructMetadata({
  title : siteConfig?.name,
  description : siteConfig?.description,
  image : siteConfig?.ogImage,
  icons : "/favicon.ico",
  noIndex : false,
  url : siteConfig?.url
});

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head >

      <script src="https://smtpjs.com/v3/smtp.js"></script>
      </head>
      <body className={poppins.className}>
        <VariantProvider>{children}</VariantProvider>
      </body>
      
    </html>
  );
}
