import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nonton - All Tool Web",
  description: "Platform streaming anime premium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
