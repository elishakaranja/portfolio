import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const { animationData, height = "800px", width = "800px", speed = 0.5 } = this.props;

    return (
      <Suspense fallback={<Loading />}>
        <div style={{ height, width }}>
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ height: "100%", width: "100%" }}
            speed={speed}
          />
        </div>
      </Suspense>
    );
  }
}
