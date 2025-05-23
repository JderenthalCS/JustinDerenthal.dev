import React, { useRef, useCallback } from 'react';
import { useMousePosition } from '../hooks/useMousePosition'; // Adjust path as needed

const base = process.env.PUBLIC_URL;

function calculateCardRotation({ currentX, currentY, centerX, centerY, maxRotationX, maxRotationY }) {
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;
  const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const rotationFactor = distance / maxDistance;
  const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
  const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
  return { rotationX, rotationY };
}

function ProjectCard({ project }) {
  const ref = useRef(null);

  const update = useCallback(({ x, y }) => {
    const card = ref.current;
    if (!card) return;

    const { width, height } = card.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 6,
      maxRotationY: 8,
    });

    card.style.setProperty('--x', `${rotationX}deg`);
    card.style.setProperty('--y', `${rotationY}deg`);
  }, []);

  useMousePosition(ref, update);

  return (
    <div
      ref={ref}
      className="p-4 rounded-xl bg-surface shadow-md border border-border hover:border-primary transition-transform duration-200 will-change-transform"
      style={{
        transform: 'perspective(600px) rotateX(var(--x)) rotateY(var(--y))',
        transitionDuration: '50ms',
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.setProperty('--x', '0deg');
          ref.current.style.setProperty('--y', '0deg');
        }
      }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-40 object-cover rounded-lg mb-4 border border-border"
        />
      )}
      <h3 className="text-xl text-textMain font-semibold mb-2">{project.title}</h3>
      <p className="text-textMuted mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs bg-background text-secondary px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          {project.link.endsWith('.pdf') ? 'Open PDF' : 'View on GitHub'}
        </a>

        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Visit Site
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Circuit Sandbox',
      description: 'A drag-and-drop JavaFX simulator for designing and testing basic electronic circuits.',
      tags: ['Java', 'JavaFX', 'Azure', 'FXML'],
      link: 'https://github.com/JderenthalCS/CSC311-Circuit-Project.git',
      image: `${base}/assets/projectImages/circuitsandbox.png`,
    },
    {
      title: 'PintFinder',
      description: 'Desktop app to find and rate Guinness pints worldwide with a stylized interface.',
      tags: ['Java', 'JavaFX', 'Firebase', 'HTML', 'CSS'],
      link: 'https://github.com/JderenthalCS/PintFinder.git',
      image: `${base}/assets/projectImages/pintfinder.png`,
    },
    {
      title: 'TikTok Share Predictor',
      description: 'A machine learning model trained on verified TikTok videos to predict post virality using logistic regression, binary classification, and k-fold validation.',
      tags: ['Python', 'Scikit-Learn', 'Data Science', 'ML'],
      link: `${base}/assets/projectPDFs/TTSharePredictor.pdf`,
      image: `${base}/assets/projectImages/TTSharePredictor.png`,
    },
    {
      title: 'Original Portfolio Website',
      description: 'My first personal portfolio built entirely with HTML, CSS, and vanilla JavaScript. It showcased early projects and helped solidify my frontend fundamentals.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/JderenthalCS/JDerenthalCS.terminal',
      site: 'https://jderenthalcs.github.io/JDerenthalCS.terminal/',
      image: `${base}/assets/projectImages/portfolioV1.png`,
    }
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-primary mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
