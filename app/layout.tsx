import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaFlow Plumbing",
  description: "Professional 24/7 plumbing services for residential and commercial properties. Fast, reliable, and affordable solutions for all your plumbing needs.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
