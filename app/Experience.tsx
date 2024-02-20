"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: "white",
  metalness: 0,
  roughness: 0,
  transmission: 0.9,
  transparent: true,
  ior: 1.5,
  opacity: 0.3,
  side: THREE.DoubleSide,
});

export const Experience = () => {
  return (
    <Canvas>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight />
      <Environment blur={0.1} background={false} preset="city" />

      <mesh rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial emissive={[1, 1, 1]} emissiveIntensity={1} />
      </mesh>

      <mesh material={glassMaterial} position={[0, 0, 1]}>
        <boxGeometry args={[3, 3, 0.2]} />
      </mesh>
    </Canvas>
  );
};
