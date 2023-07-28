import React from "react";
import About from "./About";
import Dev1 from "./Dev1";
import Dev2 from "./Dev2";
import Logos from "./components/Logos";

export default function App() {
  return (
    <div className="min-h-screen">
      <section className="pt-4">
        <About />
        <div>
          <Logos />
        </div>
      </section>
      <section className="pt-8 bg-[#0d0f11] text-white relative">
        <Dev1 />
        <Dev2 />
      </section>
    </div>
  );
}
