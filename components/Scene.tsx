"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [5, 10, 5], zoom: 2, fov: 45 }}
      dpr={[1, 1.5]}
      className="relative "
    >
      {/* Add orbit controls for mouse interaction */}
      <OrbitControls enableZoom={false} enablePan={true} />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
