import React from "react";
import bgImg from "./../assets/lovleshpokra.com_bg-image.jpg";

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <div className="platform">
        <img src={bgImg} />
      </div>
      <div className="overlay">{children}</div>
    </div>
  );
}

export default Wrapper;
