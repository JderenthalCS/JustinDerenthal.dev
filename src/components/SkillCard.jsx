import React, { useRef, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition'; // Adjust path if you placed the hook elsewhere

export default function SkillCard({ category, items }) {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useMousePosition(cardRef, setPos);

  return (
    <div
      ref={cardRef}
      style={{
        '--x': `${pos.x}px`,
        '--y': `${pos.y}px`,
      }}
      className="group border border-border rounded-xl p-6 bg-background/60 shadow-md hover:shadow-2xl hover:border-primary relative overflow-hidden transition-all duration-300 backdrop-blur-md"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 60%)`,
        }}
      />
      <h3 className="text-xl font-semibold text-textMain mb-4">{category}</h3>
      <div className="grid grid-cols-2 gap-4">
        {items.map(({ name, icon }) => (
          <div key={name} className="flex items-center space-x-3">
            <img src={icon} alt={name} className="w-6 h-6" />
            <span className="text-textMuted">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
