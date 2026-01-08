import React from 'react';

function Lights() {
  return (
    <>
      {/* Ambient light - genel aydınlatma */}
      <ambientLight intensity={0.1} />
      
      {/* Point light - güneşten gelen ışık */}
      <pointLight
        position={[0, 0, 0]}
        intensity={2}
        distance={500}
        decay={2}
        color="#FDB813"
      />
    </>
  );
}

export default Lights;