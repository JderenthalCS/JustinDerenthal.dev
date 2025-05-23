import React from 'react';
import SkillCard from '../components/SkillCard';

const base = process.env.PUBLIC_URL;

const skills = {
  Languages: [
    { name: 'Java', icon: `${base}/assets/skills/java.svg` },
    { name: 'JavaScript', icon: `${base}/assets/skills/javascript.svg` },
    { name: 'Python', icon: `${base}/assets/skills/python.svg` },
    { name: 'HTML', icon: `${base}/assets/skills/html5.svg` },
    { name: 'CSS', icon: `${base}/assets/skills/css.svg` },
    { name: 'Lua', icon: `${base}/assets/skills/lua.svg` },
  ],
  Frameworks: [
    { name: 'React', icon: `${base}/assets/skills/react.svg` },
    { name: 'Node.js', icon: `${base}/assets/skills/nodejs.svg` },
    { name: 'Tailwind CSS', icon: `${base}/assets/skills/tailwindcss.svg` },
  ],
  Tools: [
    { name: 'Git', icon: `${base}/assets/skills/git.svg` },
    { name: 'Figma', icon: `${base}/assets/skills/figma.svg` },
  ],
  Databases: [
    { name: 'Firebase Firestore', icon: `${base}/assets/skills/firebase.svg` },
    { name: 'MongoDB', icon: `${base}/assets/skills/mongodb.svg` },
    { name: 'Azure SQL', icon: `${base}/assets/skills/Microsoft_Azure.svg` },
  ],
  Environments: [
    { name: 'Linux', icon: `${base}/assets/skills/linux.svg` },
    { name: 'Kali Linux', icon: `${base}/assets/skills/kali.svg` },
    { name: 'Intellij', icon: `${base}/assets/skills/intellijidea.svg` },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, items]) => (
          <SkillCard key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  );
}
