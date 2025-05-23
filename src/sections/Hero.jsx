import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.VANTA?.NET && window.THREE) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x22d3ee,
        backgroundColor: 0x0e0e10,
        points: 15.0,
        maxDistance: 25.0,
      });

      return () => effect?.destroy();
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Vanta Background */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content in bordered box */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <div className="border border-[#22d3ee] rounded-xl p-8 bg-background/80 backdrop-blur-sm shadow-md max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-textMain transition-all duration-300 group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hey — I’m{' '}
            <span className="relative inline-block group">
              <span
                className="inline-block font-semibold cursor-default"
                onMouseEnter={() => {
                  document.querySelectorAll('.glow-letter').forEach((el, i) => {
                    if (i <= 15) {
                      el.classList.remove('letter-animate-out');
                      void el.offsetWidth;
                      setTimeout(() => el.classList.add('letter-animate'), i * 50);
                    }
                  });
                }}
                onMouseLeave={() => {
                  document.querySelectorAll('.glow-letter').forEach((el) => {
                    el.classList.remove('letter-animate');
                    el.classList.add('letter-animate-out');
                  });
                }}
              >
                {'Justin Derenthal'.split('').map((char, i) => (
                  <span key={i} className="glow-letter">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#22d3ee] font-medium mb-6"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
          >
            Full-Stack Developer × UI Designer
          </motion.p>

          <motion.p
            className="text-textMuted max-w-xl text-base md:text-lg mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.6, ease: 'easeOut' }}
          >
            I build sleek, responsive applications with thoughtful interfaces and powerful backends —
            whether it's for fun, function, or fantasy.
          </motion.p>
        </div>
      </div>

      {/* Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#0e0e10] z-20" />
    </section>
  );
}
