import React from "react";
import { Button } from "@/components/button";

const Hero = () => (
  <section className="bg-gradient-to-r from-purple-200 to-teal-100 py-10 px-6 md:px-20 lg:px-40">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Anjali Kumari</h1>
    <h2 className="text-2xl text-teal-800 font-semibold mb-4">Full Stack Developer</h2>
    <p className="max-w-2xl text-gray-700 mb-6">
      Passionate and detail-oriented full stack developer pursuing an Integrated B.Tech + M.Tech in ECE from NIT Hamirpur. Skilled in modern web technologies, enthusiastic about solving real-world problems and building impactful digital products.
    </p>
    <div className="flex gap-4">
      <a href="mailto:anjali943122@gmail.com"><Button variant="default">Contact Me</Button></a>
      <a href="/Anjali_Resume.pdf" target="_blank"><Button variant="outline">Download Resume</Button></a>
    </div>
  </section>
);

export default Hero;