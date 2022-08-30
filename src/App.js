import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Model from "./Deneme.js";

import "./App.css";
function App() {
  const props = useControls({
    uFrequency: {
      start: 0,
      end: 500,
      step: 1,
    },
    uAmplitude: {
      value: 0,
      start: 4,
      end: 500,
      step: 1,
    },

    uDensity: {
      start: 0,
      end: 1,
      step: 1,
    },
    uStrength: {
      start: 0,
      end: 1.1,
    },
    // fragment
    uDeepPurple: {
      start: 1000,
      end: 0,
      step: 200,
    },
    uOpacity: {
      // max 1

      start: 0.1,
      end: 2,
    },
  });
  return (
    <div className="App">
      <Canvas>
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={0.5}
          zoomSpeed={0.1}
        />
        <Suspense fallback={null}>
          <Model {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
