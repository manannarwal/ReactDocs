import React, { useState } from "react";
import Card from "./card";
import { useRef } from "react";

const foreground = () => {

    const ref = useRef(null);

  const initialData = [
    {
        id: 1,
      desc: "Hell yeah, this is Trevor, I hate frankklin nigger, fuck his black ass",
      size: "0.4 Mb",
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        id: 2,
      desc: "Hell yeah, this is Miachel, I hate trevor beggar, fuck his poor farming ass",
      size: "0.6 Mb",
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        id: 3,
      desc: "Hell yeah, this is Franklin, I hate my fukin nigger aunt, fuck her 24x7",
      size: "0.9 Mb",
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  const [data, setData] = useState(initialData)

  const handleToggleTag = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, tag: { ...item.tag, isOpen: !item.tag.isOpen } } : item
      )
    );
  };



  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-6">
      {data.map((item, index) => (
        <Card key={item.id} data={item} reference={ref} onToggleTag={handleToggleTag}/>
      ))}
    </div>
  );
};

export default foreground;
