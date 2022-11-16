import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";

import "./style.scss";

export default function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    // <section className="header-container" data-scroll-section>
    //   <h1
    //     id="header-text"
    //     style={{
    //       height: "50vh",
    //       marginTop: "30vh",
    //       fontFamily: "FixedSys",
    //       fontSize: "14vw",
    //     }}
    //   >
    //     Analiz
    //     <br />
    //     IO
    //   </h1>
    <>
      <section>
        <div className="intro">
          <h2 className="intro__title">
            <span id="header-text">Analiz</span>
            <em>IO</em>
          </h2>
          <p className="intro__description">
            Sürdürülebilir bir gelecek için yapay zekanın yapabileceklerini
            keşfet{" "}
          </p>
          <button className="intro__button unbutton">Create with us</button>
        </div>
      </section>
      <section>
        <div className="intro">
          <h2 className="intro__title">
            <span id="header-text">Analiz</span>
            <em>IO</em>
          </h2>
          <p className="intro__description">
            Sürdürülebilir bir gelecek için yapay zekanın yapabileceklerini
            keşfet{" "}
          </p>
          <button className="intro__button unbutton">Create with us</button>
        </div>
      </section>
    </>
  );
}
