import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iowa Summer Jam - The Biggest Music Festival in Iowa",
  description: "Iowa Summer Jam is an all day festival where all the best of the best artists in Iowa and surrounding states come together and put on a show.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
