import React from "react";
import "./style-timing.css";
import boat from "./boat.svg";
const Timing = () => {
  return (
    <div className="cicule-timing night">
      <div className="sun"></div>
      <div className="moon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="stars">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="water">
        <img
          src={boat}
          alt="boat"
          width="200px"
          height="150px"
          className="img-boat"
        />
      </div>
      <h1 className="text-s1-2 text-focus-end">MI PORTAFOLIO</h1>
    </div>
  );
};

export default Timing;
