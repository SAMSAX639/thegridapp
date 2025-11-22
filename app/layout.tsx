import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend_Deca } from "next/font/google";

const brigends = localFont({
  src: [
    {
      path: "../public/BrigendsExpanded.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-brigends",
  display: "swap",
});


const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
  variable: "--font-lexend",
});


export const metadata: Metadata = {
  title: "The Grid – Pickleball & Paintball",
  description: "Pickleball · Paintball · Banquet Lawn · Cafe – Madurai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${brigends.variable} ${lexend.variable}`} data-theme="thegrid">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
