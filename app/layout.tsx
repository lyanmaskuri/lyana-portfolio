import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyana's Portfolio",
  description: "Personal portfolio of me, showcasing web development projects, skills and experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
     <body className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-pink-100 selection:text-pink-900">
  {children}
</body>
    </html>
  );
}
