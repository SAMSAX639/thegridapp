import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en" data-theme="thegrid">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
