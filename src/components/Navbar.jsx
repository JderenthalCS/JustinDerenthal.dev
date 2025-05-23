import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const links = ['Hero', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [lockSection, setLockSection] = useState(false);
  const linkRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      if (lockSection) return;

      let closestSection = '';
      let closestDistance = Infinity;

      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();

          // Only consider sections that are visible on screen
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const distance = Math.abs(rect.top - window.innerHeight / 2);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = link.toLowerCase();
            }
          }
        }
      });

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, lockSection]);

  const handleNavClick = (target) => {
    setActiveSection(target);
    setLockSection(true);
    setTimeout(() => {
      setLockSection(false);
    }, 1000); // Lock time after click, adjust if needed
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-background/80 border-b border-border">
      <nav className="flex justify-center px-6 py-4 max-w-7xl mx-auto">
        <ul className="flex space-x-10 text-sm relative">
          {links.slice(1).map((link) => ( // Skip Hero
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => handleNavClick(link.toLowerCase())}
                className="relative block text-textMuted hover:text-primary transition-colors duration-200"
                ref={(el) => (linkRefs.current[link.toLowerCase()] = el)}
              >
                <span className="relative inline-block">
                  {link}
                  {activeSection === link.toLowerCase() && activeSection !== 'hero' && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute left-1/2 -bottom-[6px] h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_2px_#22d3ee]"
                      style={{ transform: 'translateX(-50%)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
