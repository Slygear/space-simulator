import React, { useMemo } from 'react';
import { VISUAL_CONFIG } from '../config';

function Starfield() {
  // Rastgele yıldız pozisyonları oluştur
  const stars = useMemo(() => {
    const positions = new Float32Array(VISUAL_CONFIG.starCount * 3);
    
    for (let i = 0; i < VISUAL_CONFIG.starCount; i++) {
      // Rastgele küresel dağılım
      const radius = 300 + Math.random() * 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={stars.length / 3}
          array={stars}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.8}
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

export default Starfield;