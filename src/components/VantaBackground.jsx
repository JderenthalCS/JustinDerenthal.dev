// src/components/VantaBackground.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/vanta/vanta.net.min.js';
    script.onload = () => {
      if (window.VANTA && window.VANTA.NET && !vantaEffect && vantaRef.current) {
        setVantaEffect(
          window.VANTA.NET({
            el: vantaRef.current,
            THREE,
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
          })
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 -z-10" />;
}
