import React, { useState } from "react";
import Aboutleft from "./components/Aboutleft";
import Aboutright from "./components/Aboutright";



export default function About() {
  const [my_swiper, set_my_swiper] = useState({});
  return (
    <div className="max-w-[1688px] px-4 md:ps-10 md:pe-10 w-full me-auto ms-auto md:px-6 ">
      <h3 className="text-[#999] text-[18px] leading-[1.05] font-medium my-4 ms-0 me-0">
        02 — About Us
      </h3>
      <div className="2xl:mt-6 2xl:pb-11 mt-4 pb-8 flex items-center justify-between relative after:content-[''] after:block after:w-full after:h-4 after:bg-transparent after:border-b-0 after:border after:border-[#0003] after:absolute after:left-0 after:bottom-0">
        <h2 className="2xl:text-[58px] lg:text-[50px] md:text-[40px] text-[23px] font-medium leading-[1.05] tracking-tight">
          We Strive to Innovate
        </h2>
        <button
          className="button_button__FUDeW button_button_light__InlVb button_button_arrow__eacfF about_about_head_btn__XQ62t"
          type="button"
        >
          <span className="button_button_text__VozkV" data-class="text">
            <span>Become a client</span>
            <span>Become a client</span>
          </span>
          <span className="button_button_icon__2XfQz" data-class="icon">
            <span className="button_button_circle__i_zha" data-circle="true"></span>
            <svg
              className="button_button_icon_arrow__maDqq"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6H12M12 6L7 1M12 6L7 11"
                data-stroke="true"
                strokeWidth="1.5"
              ></path>
            </svg>
            <span className="button_button_svgs__WeUWI" data-class="arrow">
              <svg
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6H12M12 6L7 1M12 6L7 11"
                  data-stroke="true"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </span>
          </span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row py-8">
        <Aboutleft set_my_swiper={set_my_swiper} />
        <Aboutright my_swiper={my_swiper}/>
      </div>
    </div>
  );
}
