import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
function SliderButtons({ containerStyle, btnStyle, iconStyle }) {
  const swiper = useSwiper();
  return (
    <>
      <div className={containerStyle}>
        <button className={btnStyle}>
          <FaChevronLeft
            className={iconStyle}
            onClick={() => swiper.slidePrev()}
          />
        </button>
        <button className={btnStyle}>
          <FaChevronRight
            className={iconStyle}
            onClick={() => swiper.slideNext()}
          />
        </button>
      </div>
    </>
  );
}

export default SliderButtons;
