import React from "react";

const background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-400 text-2xl">
          DOCS
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-white">
          Docs
        </h1>
      </div>
    </>
  );
};

export default background;
