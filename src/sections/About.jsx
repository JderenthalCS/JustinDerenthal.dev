import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const base = process.env.PUBLIC_URL;

export default function About() {
  const [showEducation, setShowEducation] = useState(true);
  const [showCareer, setShowCareer] = useState(true);

  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-primary">About Me</h1>

      {/* Intro Box */}
      <div className="border border-border rounded-lg p-6 mb-8 bg-background/70 hover:border-primary transition-all duration-300">
        <p className="mb-4 text-textMuted text-lg">
          I’m a senior Computer Science major at Farmingdale State College with a strong interest in full-stack development,
          systems design, and creative software projects.
        </p>
        <p className="text-textMuted text-lg">
          While my coursework has given me a strong foundation in data structures, algorithms, and engineering principles,
          I’ve learned just as much from building real-world projects on my own. From interactive games to tools with custom UIs,
          I enjoy developing things that are both useful and fun.
        </p>
        <p className="mt-4 text-textMuted text-lg">
          I’m always learning something new and enjoy problem-solving, creating clean user experiences,
          and building tools people can actually use.
        </p>
      </div>

      {/* Career */}
      <div className="mb-6">
        <button
          onClick={() => setShowCareer(prev => !prev)}
          className="text-2xl font-semibold text-textMain mb-2 hover:underline focus:outline-none"
        >
          Career
        </button>
        <AnimatePresence>
          {showCareer && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mt-2 border border-border rounded-lg bg-background/60 p-4 hover:border-primary transition-all duration-300"
            >
              <ul className="text-textMuted text-lg space-y-6">
                <li className="mb-4">
                  <img src={`${base}/assets/logos/fsc.png`} alt="fsc Logo" className="w-18 h-10 mb-2" />
                  <strong>Teaching Assistant – Data Structures & Algorithms</strong><br />
                  <span className="text-sm text-textMuted">Farmingdale State College · Part-time · Feb 2025 – Present · On-site</span>
                  <ul className="list-disc list-inside ml-6 mt-1 text-base">
                    <li>Assist students in understanding key data structures and algorithmic concepts.</li>
                    <li>Conduct review sessions and provide Java/Python debugging help.</li>
                    <li>Work closely with the professor to enhance learning materials.</li>
                  </ul>
                </li>
                <li className="mb-4">
                  <img src={`${base}/assets/logos/DataAnnotation-Tech_Logo_mini.png`} alt="DataAnnotation Logo" className="w-18 h-10 mb-2" />
                  <strong>Software Developer – AI Consultant</strong><br />
                  <span className="text-sm text-textMuted">DataAnnotation · Contract · Aug 2023 – Present</span>
                </li>
                <li className="mb-4">
                  <img src={`${base}/assets/logos/vgtp.png`} alt="VGTP Logo" className="w-12 h-5 mb-2" />
                  <strong>General Manager</strong><br />
                  <span className="text-sm text-textMuted">
                    Video Game Trading Post · Full-time · Aug 2018 – Sep 2023
                  </span>
                  <ul className="list-disc list-inside ml-6 mt-1 text-base">
                    <li>Oversaw daily operations, staff training, and customer engagement.</li>
                    <li>Handled finances, vendor relationships, and implemented growth strategies.</li>
                  </ul>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Education */}
      <div className="mb-6">
        <button
          onClick={() => setShowEducation(prev => !prev)}
          className="text-2xl font-semibold text-textMain mb-2 hover:underline focus:outline-none"
        >
          Education
        </button>
        <AnimatePresence>
          {showEducation && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mt-2 border border-border rounded-lg bg-background/60 p-4 hover:border-primary transition-all duration-300"
            >
              <ul className="text-textMuted text-lg space-y-2">
                <li className="flex items-center space-x-3 list-none">
                  <img src={`${base}/assets/logos/farmingdale.png`} alt="Farmingdale Logo" className="w-12 h-12" />
                  <span><strong>Farmingdale State College</strong> — B.S. in Computer Science (Expected 2025)</span>
                </li>
                <li className="pl-20 list-disc list-inside">
                  Relevant Courses: Data Structures, Software Engineering, Operating Systems, Web Development
                </li>
                <li className="flex items-center space-x-3 mt-4 list-none">
                  <img src={`${base}/assets/logos/nassau.png`} alt="Nassau Logo" className="w-12 h-12" />
                  <span><strong>Nassau Community College</strong> — Associate's Degree, Liberal Arts and Sciences/Liberal Studies</span>
                </li>
                <li className="pl-20 list-disc list-inside">
                  Sep 2020 – May 2022
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
