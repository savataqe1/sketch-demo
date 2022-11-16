import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  Html,
} from "@react-three/drei";
import CustomCursor from "./CustomCursor";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import useLocoScroll from "./hooks/useLocoScroll";

import Model from "./Deneme.js";
import SmoothScroll from "./utils/SmoothScroll";
import React, { useState } from "react";
import { pageData } from "./data";
import Header2 from "./components/MainHeader";
import Keader from "./components/Header";

import ContactButton from "./components/ContactButton";
import MenuManager from "./components/Menu/MenuManager";
import "./App.scss";
function App() {
  const ref = useRef(null);
  // useLocoScroll();
  return (
    <>
      <CustomCursor />
      <MenuManager>
        <Header2 />
        <div className="main-container2" id="main-container2">
          <Header />
          <ContactButton />
        </div>
      </MenuManager>
      <SmoothScroll>
        <section
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Canvas
            camera={[-0.04, -0.07, 0.05]}
            gl={{
              logarithmicDepthBuffer: true,
              antialias: false,
              stencil: false,
              depth: false,
            }}
          >
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </section>
      </SmoothScroll>
    </>
  );
}

export default App;
