import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
const Issue6 = () => {
  return (
    <div className=" bg-white h-[100vh] w-[100vw] items-center  justify-center">
      <div className=" flex flex-col h-screen items-center  justify-center">
        <Image
          className="  "
          src={"/img/backstagetalks_cover_issue_6.png"}
          alt="/"
          width="420"
          height="532"
        />
        <p className="  flex text-center  w-[4rem]">Issue #6</p>
        <Link
          href="/"
          className=" flex text-sorati w-[6rem] px-3   pt-3 text-base font-bold hover:underline"
        >
          Buy here
        </Link>
        <p className=" text-base font-normal w-[10rem]  text-center flex  pt-2 ">
          or in
          <Link href="/" className="px-2">
            selected stores
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Issue6;
