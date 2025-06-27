import React from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <main className="bg-[#f3f4f6] text-[#1a1a1a] min-h-screen font-sans">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
} 