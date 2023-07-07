import React, { useState } from "react";
import Heading from "./components/Heading";
import Contact from "./components/Contact";
import Infopolicy from "./components/Infopolicy";
import Privac1y from "./components/Privacy";
import Issue from "./components/Issue";
import Issue7 from "./components/Issue7"
import Issue6 from "./components/Issue6";
import Issue5 from "./components/Issue5";

const index = () => {
  // const [bg, setBg] = useState("");

  return (
    <div className=" main " >
    <div className="  ">
      <Heading />
      <Contact />
      <Infopolicy />
      <Privac1y />
      <Issue />
      </div>
      <Issue7/>
      <Issue6/>
      <Issue5/>
    </div>
  );
};

export default index;
