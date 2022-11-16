import React from "react";
import { TweenLite, Power2 } from "gsap";

export default class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight,
  };

  ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      console.log(crx);
      this.setState({
        height: crx.height,
      });
    }
  });

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewport);
  }

  onScroll = () => {
    TweenLite.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power2.easeOut,
      // duration: 6.6,
      overwrite: true,
    });
  };

  render() {
    return (
      <>
        <div
          className="viewport"
          ref={(ref) => (this.viewport = ref)}
          style={{
            background: "transparent",
            bottom: "0",
            position: "fixed",
            zIndex: "2",
          }}
        >
          {this.props.children}
        </div>
        <div
          ref={(ref) => (this.fake = ref)}
          style={{
            height: this.state.height,
            position: "fixed",
            bottom: 0,
            backgroundColor: "transparent",
          }}
        />
      </>
    );
  }
}
