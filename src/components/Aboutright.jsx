import React from "react";
import "./aboutright.css";

export default function Aboutright({my_swiper}) {
  return (
    <div className="hidden lg:flex flex-grow pl-6 justify-end">
      <div className="max-w-[600px] w-full">
        <div className="parent">
          <div className="child1 circle rounded-full item" onMouseOver={()=>my_swiper.slideTo(0)}></div>
          <div className="child2 circle rounded-full item" onMouseOver={()=>my_swiper.slideTo(1)}>
            <p
              className="normal-point hover-point c2p1"
              data-label="A/B Testing"
              data-point="false"
            ></p>
            <p
              className="normal-point main-point c2p2 hover-point circle"
              data-label="Growth"
              data-point="true"
            ></p>
            <p
              className="normal-point hover-point c2p3"
              data-label="Experiments"
              data-point="false"
            ></p>
            <p
              className="normal-point hover-point c2p4"
              data-label="Optimization"
              data-point="false"
            ></p>
          </div>
          <div className="child3 circle rounded-full item" onMouseOver={()=>my_swiper.slideTo(2)}>
            <p
              className="normal-point hover-point c3p1"
              data-label="Development"
              data-point="false"
            ></p>
            <p
              className="normal-point hover-point c3p2"
              data-label="Visual Design"
              data-point="false"
            ></p>
            <p
              className="normal-point main-point c3p3 hover-point circle"
              data-label="Insights"
              data-point="true"
            ></p>
            <p
              className="normal-point hover-point c3p4"
              data-label="User Experience"
              data-point="false"
            ></p>
            <p
              className="normal-point hover-point c3p5"
              data-label="Innovations"
              data-point="false"
            ></p>
          </div>
          <div className="child4 circle rounded-full item" onMouseOver={()=>my_swiper.slideTo(0)}>
          <p
              className="normal-point hover-point c4p1"
              data-label="Data Science"
              data-point="false"
            ></p>
            <p
              className="normal-point main-point c4p2 hover-point circle"
              data-label="Product"
              data-point="true"
            ></p>
            <p
              className="normal-point hover-point c4p3"
              data-label="UX Research"
              data-point="false"
            ></p>
            <p
              className="normal-point hover-point c4p4"
              data-label="UX Strategy"
              data-point="false"
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}
