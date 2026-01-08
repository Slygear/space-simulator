import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { VISUAL_CONFIG } from '../config';

function Sun() {
  const sunRef = useRef();

  // Güneşin yavaşça dönmesi için animasyon
  useFrame((state, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      {/* Küre geometrisi */}
      <sphereGeometry args={[VISUAL_CONFIG.sunRadius, 64, 64]} />
      
      {/* Parlak sarı materyal */}
      <meshStandardMaterial
        emissive="#FDB813"
        emissiveIntensity={VISUAL_CONFIG.sunGlowIntensity}
        color="#FDB813"
      />
    </mesh>
  );
}

export default Sun;