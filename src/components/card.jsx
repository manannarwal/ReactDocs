import React from "react";
import { motion } from "framer-motion";

const card = ({ data, reference, onToggleTag }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={1}
      className="relative flex-shrink-0 w-60 h-72 rounded-4xl bg-zinc-600/50 px-5 py-5 text-white overflow-hidden mb-5"
    >
      <i class="ri-file-text-line"></i>
      <p className="mt-2 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex justify-between items-center px-6 mb-2 py-5">
          <h3>{data.size}</h3>
          <span className="w-7 h-7 bg-zinc-500 rounded-full justify-center items-center flex ">
            <button onClick={() => onToggleTag(data.id)}>
              {data.tag.isOpen ? (
                <i className="ri-close-line"></i>
              ) : (
                <i className="ri-download-line"></i>
              )}
            </button>
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`download w-full h-13 ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
            } flex justify-center items-center`}
          >
            <h1 className=" font-semibold py-3.5 ">{data.tag.tagTitle}</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default card;
