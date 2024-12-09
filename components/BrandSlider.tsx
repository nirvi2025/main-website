"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider = () => {
  const brandSliderData = [
    {id:1, name:"Web Designer"},
    {id:2, name:"Mobile Apps Design"},
    {id:3, name:"Dashboard Design"},
    {id:4, name:"Digital Marketing"},
    {id:5, name:"Website Nirvi Marketing"},
    {id:6, name:"Nirvi Design"},
    {id:7, name:"Nirvi Design"},
  ]
  return (
    <div className="brand-section-3 fix section-border section-border-2 pt-4 pb-4">
      <div className="container">
        <div className="brand-list">
          <Swiper
            {...sliderProps.brandListSlider}
            className="swiper brand-list-slider"
          >
            <div className="swiper-wrapper mt-slide-transtion">
              {brandSliderData.map((item, i) =>
                  <SwiperSlide key={i + 1} className="swiper-slide mt-brand-slide-element ">
                    <div className="brand-list-items">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          className="me-3"
                      >
                        <g clipPath="url(#clip0_67_3021)">
                          <path
                              d="M20 9H12.4L17.8 3.6L16.4 2.2L11 7.6V0H9V7.6L3.6 2.2L2.2 3.6L7.6 9H0V11H7.6L2.2 16.4L3.6 17.8L9 12.4V20H11V12.4L16.4 17.8L17.8 16.4L12.4 11H20V9Z"
                              fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_67_302">
                            <rect width={20} height={20} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {item.name}
                    </div>
                  </SwiperSlide>
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default BrandSlider;
