import React from 'react';
import SkillCard from '../components/SkillCard';

const skills = {
  Languages: [
    { name: 'Java', icon: '/assets/skills/java.svg' },
    { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
    { name: 'Python', icon: '/assets/skills/python.svg' },
    { name: 'HTML', icon: '/assets/skills/html5.svg' },
    { name: 'CSS', icon: '/assets/skills/css.svg' },
    { name: 'Lua', icon: '/assets/skills/lua.svg' },
  ],
  Frameworks: [
    { name: 'React', icon: '/assets/skills/react.svg' },
    { name: 'Node.js', icon: '/assets/skills/nodejs.svg' },
    { name: 'Tailwind CSS', icon: '/assets/skills/tailwindcss.svg' },
  ],
  Tools: [
    { name: 'Git', icon: '/assets/skills/git.svg' },
    { name: 'Figma', icon: '/assets/skills/figma.svg' },
  ],
  Databases: [
    { name: 'Firebase Firestore', icon: '/assets/skills/firebase.svg' },
    { name: 'MongoDB', icon: '/assets/skills/mongodb.svg' },
    { name: 'Azure SQL', icon: '/assets/skills/Microsoft_Azure.svg' },
  ],
  Environments: [
    { name: 'Linux', icon: '/assets/skills/linux.svg' },
    { name: 'Kali Linux', icon: '/assets/skills/kali.svg' },
    { name: 'Intellij', icon: '/assets/skills/intellijidea.svg' },
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
