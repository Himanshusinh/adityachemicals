'use client';

import { useState, useEffect } from 'react';
import GlycineMolecule from './GlycineMolecule';
import MethionineMolecule from './MethionineMolecule';
import LysineMolecule from './LysineMolecule';

export default function HeroMolecules() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000); // Switch every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
          opacity: activeIndex === 0 ? 1 : 0,
          transform: activeIndex === 0 ? 'scale(1)' : 'scale(0.95)',
          pointerEvents: activeIndex === 0 ? 'auto' : 'none'
        }}
      >
        <GlycineMolecule />
      </div>
      
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
          opacity: activeIndex === 1 ? 1 : 0,
          transform: activeIndex === 1 ? 'scale(1)' : 'scale(0.95)',
          pointerEvents: activeIndex === 1 ? 'auto' : 'none'
        }}
      >
        <MethionineMolecule />
      </div>

      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
          opacity: activeIndex === 2 ? 1 : 0,
          transform: activeIndex === 2 ? 'scale(1)' : 'scale(0.95)',
          pointerEvents: activeIndex === 2 ? 'auto' : 'none'
        }}
      >
        <LysineMolecule />
      </div>
    </div>
  );
}
