import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Sun from '../three/Sun';
import Starfield from '../three/Starfield';
import Lights from '../three/Lights';

function Scene() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{
        position: [0, 50, 100],
        fov: 60,
        near: 0.1,
        far: 10000,
      }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#000000']} />
      
      {/* Lighting */}
      <Lights />

      {/* Camera Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={20}
        maxDistance={500}
        zoomSpeed={1.2}
        makeDefault
      />

      {/* 3D Objects */}
      <Suspense fallback={null}>
        <Starfield />
        <Sun />
      </Suspense>

      {/* Post Processing Effects */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

      {/* Helper Grid - moved down and made bigger */}
      <gridHelper args={[500, 50, '#333333', '#1a1a1a']} position={[0, -50, 0]} />
    </Canvas>
  );
}

export default Scene;