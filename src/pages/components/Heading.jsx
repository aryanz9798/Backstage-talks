import Image from "next/image";
import React from "react";

const Heading = () => {
  return (
    <div className="  pt-[20px] fixed top-0 z-[2] left-[15px] text-3xl font-semibold">
      <Image src="/img/logo.png" alt="/" width={280} height={280} />
    </div>
  );
};

export default Heading;
