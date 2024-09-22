import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

const challengeName: string = "Newsletter sign-up with success message";

export const metadata: Metadata = {
  title: `Frontend Mentor | ${challengeName}`,
  description: `My solution to Frontend Mentor'\s ${challengeName} challenge`,
  keywords: ["HTML, CSS, JavaScript, NextJS, Tailwindcss, React"],
  creator: "Chelsea Anne Livingston Cruz",

  openGraph: {
    title: `Frontend Mentor | ${challengeName}`,
    description: `My solution to Frontend Mentor'\s ${challengeName} challenge`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
