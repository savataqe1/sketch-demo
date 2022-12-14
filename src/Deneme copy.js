/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import fragment from "./shaders/fragment";
import vertex from "./shaders/vertex";

const TorusShaderMaterial = {
  uniforms: useControls({
    uFrequency: {
      start: 0,
      end: 4,
    },
    uAmplitude: {
      start: 4,
      end: 4,
    },
    uDensity: {
      start: 1,
      end: 1,
    },
    uStrength: {
      start: 0,
      end: 1.1,
    },
    // fragment
    uDeepPurple: {
      // max 1
      start: 1,
      end: 0,
    },
    uOpacity: {
      // max 1
      start: 0.1,
      end: 0.66,
    },
  });
  vertexShader: vertex,
  fragmentShader: fragment,
};
export default function Model({ ...props }) {
  const group = useRef();
  const test = useRef();
  const { nodes, materials } = useGLTF("/deneme.gltf");
  console.log(group);

  return (
    <group
      ref={group}
      {...props}
      position={[-0.04, -0.07, 0.05]}
      rotation={[2.19, 0, 0]}
      dispose={null}
    >
      <mesh
        geometry={nodes["default"].geometry}
        position={[-0.18, 0.15, 1.2]}
        rotation={[-0.5, -0.38, 0.04]}
        frustumCulled={false}
        ref={test}
      />
      <shaderMaterial
        attach="material"
        fragmentShader={fragment}
        vertexShader={vertex}
      />
    </group>
  );
}

useGLTF.preload("/deneme.gltf");
