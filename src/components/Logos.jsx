import React from 'react'
import SwiperCore from "swiper";
import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./marq.css";

const SwiperConfig = {
  speed: 1500,
  autoplay: {
    delay: 5,
  },
  loop: true,
  slidesPerView: "auto",
  watchSlidesProgress: true,
  spaceBetween: 0,
};
SwiperCore.use([Autoplay, Parallax]);

export default function Logos() {
  return (
    <Swiper {...SwiperConfig}>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/uber.391ab754.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/oracle.f6c579b2.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/gofundme.d15a4c9e.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/nutanix.76cbb1b9.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/upside.3fc33722.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/intel.0d9f9c40.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/new-balance.9bcd089f.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/statefarm.91373514.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/crosslead.2cd4c2e3.png"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/voldis.72b3b81d.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/uber.391ab754.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/oracle.f6c579b2.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/gofundme.d15a4c9e.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/nutanix.76cbb1b9.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/upside.3fc33722.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/intel.0d9f9c40.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/new-balance.9bcd089f.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/statefarm.91373514.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/crosslead.2cd4c2e3.png"
          alt="logo"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="about-partners_logo_list_item__HqkHi">
        <img
          src="https://awsmd.com/_next/static/media/voldis.72b3b81d.svg"
          alt="logo"
        />
      </div>
    </SwiperSlide>
  </Swiper>
  )
}
