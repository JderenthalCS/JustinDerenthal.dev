import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-16">
      <div className="border border-border rounded-xl bg-background/70 backdrop-blur-sm p-8 text-center hover:border-primary transition-all duration-300">
        <h2 className="text-3xl font-bold text-primary mb-4">Contact Me</h2>
        <p className="text-textMuted mb-6">
          I’m always open to new projects, freelance work, or just chatting tech.
          Reach out through any of the platforms below:
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a
            href="mailto:JDerenthalCS@gmail.com"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <FaEnvelope className="w-5 h-5" />
            Email
          </a>
          <a
            href="https://github.com/JderenthalCS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jderenthalcs/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@justinderenthal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <FaYoutube className="w-5 h-5" />
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
