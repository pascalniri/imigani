import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imigani",
  description:
    "Imigani - Is a digital archive dedicated to preserving and celebrating the rich storytelling traditions of Africa. From ancient folktales that carry the wisdom of our ancestors, to contemporary poetry that captures the heartbeat of a continent — every story here is a thread in the vast tapestry of African heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans3.variable} ${bricolageGrotesque.variable}`}
    >
      <body className="antialiased text-sm">{children}</body>
    </html>
  );
}
