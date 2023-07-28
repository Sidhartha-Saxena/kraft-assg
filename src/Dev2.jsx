import React from "react";
import "./tphone.css";
import { first_row, second_row, third_row } from "./assets/screens";
import phone from "./assets/phone.mp4";

export default function Dev2() {
  return (
    <div className="w-full mt-[200px] relative lg:mt-[400px]">
      <div className="w-full overflow-hidden flex justify-center">
        <div className="screens-p">
          <ul className="flex">
            {first_row.map((el) => {
              return el.src === "" ? (
                <li className="litem">
                  <div className="screen-c"></div>
                </li>
              ) : (
                <li className="litem">
                  <div className="screen-c">
                    <img
                      decoding="async"
                      data-nimg="fill"
                      className="screen-i"
                      sizes="100vw"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: "0",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        color: "transparent",
                      }}
                      src={el.src}
                      alt="screen"
                      srcSet={el.scrSet}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className="flex">
            {second_row.map((el) => {
              return el.src === "" ? (
                <li className="litem">
                  <div className="screen-c"></div>
                </li>
              ) : (
                <li className="litem">
                  <div className="screen-c">
                    <img
                      decoding="async"
                      data-nimg="fill"
                      className="screen-i"
                      sizes="100vw"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: "0",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        color: "transparent",
                      }}
                      src={el.src}
                      alt="screen"
                      srcSet={el.scrSet}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className="flex">
            {third_row.map((el) => {
              return el.src === "" ? (
                <li className="litem">
                  <div className="screen-c"></div>
                </li>
              ) : (
                <li className="litem">
                  <div className="screen-c">
                    <img
                      decoding="async"
                      data-nimg="fill"
                      className="screen-i"
                      sizes="100vw"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: "0",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        color: "transparent",
                      }}
                      src={el.src}
                      alt="screen"
                      srcSet={el.scrSet}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="hand-w">
        <div className="hand">
          <img
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
            srcSet="https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=640&q=75 640w, https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=750&q=75 750w, https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=828&q=75 828w, https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=1080&q=75 1080w, https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=1200&q=75 1200w, https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=1920&q=75 1920w, https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=2048&q=75 2048w, https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=3840&q=75 3840w"
            alt="hand"
            src="https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=3840&q=75"
            className="hand-i"
          />
          <div className="vid-hand">
            <video
              src={phone}
              playsInline={true}
              autoPlay={true}
              loop={true}
              muted={true}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
