import React from "react";
import Background from "./components/background";
import Foreground from "./components/foreground";

const App = () => {
  return (
    <div className="relative bg-zinc-900 w-full h-screen">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
