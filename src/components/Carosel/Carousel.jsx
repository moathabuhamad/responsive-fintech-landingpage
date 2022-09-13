import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.css";

import "swiper/css";

import { Autoplay } from "swiper";

function Carousel() {
  return (
    <div className="swiper-container">
      <h2>Our Partners</h2>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        centeredSlides={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {Array(30)
          .fill(1)
          .map((el, i) => {
            try {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={require(`../../assets/partners/partner${i}.jpeg`)}
                    className="partner"
                    alt="img"
                  ></img>
                </SwiperSlide>
              );
            } catch (err) {
              return null;
            }
          })}
      </Swiper>
    </div>
  );
}

export default Carousel;
