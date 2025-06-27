import React from "react";

const Projects = () => (
  <section className="bg-teal-50 py-10 px-6 md:px-20 lg:px-40">
    <h3 className="text-3xl font-bold mb-6 text-purple-800">Projects</h3>
    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-teal-700">Netflix-GPT</h4>
        <p className="text-gray-700">An AI-powered movie recommendation platform using Gemini AI with Firebase for auth and Redux for state management. Styled with Tailwind CSS.</p>
        <a href="https://github.com/Anjali-k10/NetflixGpt" className="text-blue-500 underline">View on GitHub</a>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-teal-700">Web-Tinder</h4>
        <p className="text-gray-700">A full-stack dating app with swiping interface, JWT auth, media uploads, and modern frontend using DaisyUI and Redux Toolkit.</p>
        <a href="https://github.com/Anjali-k10/WebTinder" className="text-blue-500 underline">View on GitHub</a>
      </div>
    </div>
  </section>
);

export default Projects;