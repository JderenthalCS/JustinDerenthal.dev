import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer'; 
import VantaBackground from './components/VantaBackground'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-textMain font-sans">
      <Navbar />
      <main className="px-4 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer /> 
    </div>
  );
}
