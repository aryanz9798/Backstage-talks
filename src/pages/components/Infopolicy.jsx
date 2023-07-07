import Link from "next/link";
import React from "react";

const Infopolicy = () => {
  return (
    <div className=" ">
      <div className=" fixed bottom-[2.25rem] top-[30rem] left-[22px]  h-full mt-0 " >
        <p className=" text-lg font-bold p-3">
          Backstage Talks is a magazine <br /> of casual, but in depth dialogues{" "}
          <br /> on design and business. Our decisions
          <br /> shape and influence this complex world
          <br/>—to have a chance to make the right ones, we need to talk.
        </p>
        <span className=" text-sm font-thin ">
          © 2023 <Link href="/">Published by Büro Milk</Link>
        </span>
      </div>
    </div>
  );
};

export default Infopolicy;
