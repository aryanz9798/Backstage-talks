import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
const Issue7 = () => {
  return (
      
    <div className=" bg-sorati w-[100%] h-[99.9vh] ">
      <div className=" absolute  left-[37.5%] top-[4.5%]   bg-sorati ">
        <Image
         className=""
          src={"/img/backstagetalks_cover_issue_7.png"}
          alt="/"
          width="420"
          height="532"
        />
        <p className=" text-center font-bold text-lg">Issue #7</p>
        <p className=" text-center leading-loose ">
          <Link
            className="text-white  px-3 text-base font-bold hover:underline"
            href="/"
          >
            Buy here
          </Link>
          (Europe)
        </p>
        <p className=" text-center leading-loose -bottom-2 ">
          <Link
            className="text-white underline px-1 text-base font-bold hover:underline"
            href="/"
          >
            Buy here
          </Link>
          (UK & Overseas)
        </p>
        <p className=" text-base font-normal text-center  pt-2">
          or in
          <Link  href="/" className=" text-base font-normal text-white px-2">
            selected stores
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Issue7;
