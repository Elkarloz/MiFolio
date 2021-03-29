import React from "react";

import { useEffect } from "react";
const Scroll = () => {
  useEffect(() => {
    let aux = document.querySelector(".section-first");
    console.log(aux);
  }, []);

  return <div></div>;
};

export default Scroll;
