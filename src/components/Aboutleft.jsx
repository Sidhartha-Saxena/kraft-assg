import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import totum from "../assets/totum.mp4";
import ball from "../assets/ball.mp4";
import clock from "../assets/clock.mp4";
import slink from "../assets/slink.mp4";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

SwiperCore.use([EffectFade]);

export default function Aboutleft({ set_my_swiper }) {
  return (
    <div className="left-side">
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect="fade"
          onInit={(ev) => {
            set_my_swiper(ev);
          }}
          initialSlide={0}
        >
          <SwiperSlide>
            <p
              data-text="Solid Strategy"
              className="text-[16px] md:text-[19px] 2xl:text-[26px] font-normal leading-[1.38] tracking-[-0.01em] max-w-md text-[#878787] relative sw-el"
            >
              Solid Strategy aligned with business needs and robust data
              analysis are fundamental ingredients to extract actionable
              insights
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p
              data-text="Using agile data analysis"
              className="text-[16px] md:text-[19px] 2xl:text-[26px] font-normal leading-[1.38] tracking-[-0.01em] max-w-md text-[#878787] relative sw-el"
            >
              Using agile data analysis supported by data science, our process
              has proven to deliver constant business growth
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p
              data-text="Ideas have to be manifested,"
              className="text-[16px] md:text-[19px] 2xl:text-[26px] font-normal leading-[1.38] tracking-[-0.01em] max-w-md text-[#878787] relative sw-el"
            >
              Ideas have to be manifested, tested and proven to work. Continued
              experiments are one of our key drivers
            </p>
          </SwiperSlide>
        </Swiper>
        <h3 className="2xl:mt-24 mt-12 font-semibold text-[#999796] leading-[1.2] text-[16px] 2xl:text-[18px]">
          Some Number About Us
        </h3>
        <ul className="left-list list-none">
          <li className="left-list-item">
            <div className="card-v">
              <video
                src={totum}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                className="vid"
              ></video>
              <div className="relative z-10">
                <h3 className="card-t">+300</h3>
                <p className="card-p">
                  We have successfully completed a total of 300+ projects
                </p>
              </div>
            </div>
          </li>
          <li className="left-list-item">
            <div className="card-v">
              <video
                src={slink}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                className="vid"
              ></video>
              <div className="relative z-10">
                <h3 className="card-t">100K</h3>
                <p className="card-p">
                  We've gathered dozens of reviews from the clients and + 100k
                  reviews from their users
                </p>
              </div>
            </div>
          </li>
          <li className="left-list-item">
            <div className="card-v">
              <video
                src={clock}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                className="vid"
              ></video>
              <div className="relative z-10">
                <h3 className="card-t">+10</h3>
                <p className="card-p">Years of experience</p>
              </div>
            </div>
          </li>
          <li className="left-list-item">
            <div className="card-v">
              <video
                src={ball}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                className="vid"
              ></video>
              <div className="relative z-10">
                <h3 className="card-t">+40</h3>
                <p className="card-p">Team members all over the world</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
