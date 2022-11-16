import React from "react";
import "./style.scss";
import Logo from "./logo-svg.svg";

export default function Navbar() {
  return (
    <div className="navbar" data-scroll-section>
      <img src={Logo} width="10%" />
    </div>
  );
}
