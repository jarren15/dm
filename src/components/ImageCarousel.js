import React, { useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from "swiper/modules";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import "swiper/css/bundle";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import _ from "lodash";

export const ImageCarousel = ({ items, title }) => {
  // const allItems = items.map((item, i) => {
  //   return (
  //     <CCarouselItem key={_.uniqueId("carouse-item_")}>
  //       <GatsbyImage className="d-block w-100" image={item.image.asset.gatsbyImageData} alt={`slide-${i + 1}`} />
  //     </CCarouselItem>
  //   );
  // });

  const customPrevButtonRef = useRef(null);
  const customNextButtonRef = useRef(null);

  const renderItems = items.map((item, i) => {
    return (
      <SwiperSlide key={_.uniqueId("carouse-item_")}>
        <GatsbyImage className="d-block w-100" image={item.image.asset.gatsbyImageData} alt={`slide-${i + 1}`} />
      </SwiperSlide>
    );
  });
  // return (
  //   <CCarousel controls indicators interval={3000}>
  //     {allItems}
  //   </CCarousel>

  // );

  // useEffect(() => {
  //   swiperRef.current.swiper.autoplay = {delay: 1000}
  // }, [])

  return (
    <>
      <Swiper
        speed={3000}
        pagination={{ type: "fraction" }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        navigation={{ prevEl: customPrevButtonRef.current, nextEl: customNextButtonRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = customPrevButtonRef.current;
          swiper.params.navigation.nextEl = customNextButtonRef.current;
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}>
        {renderItems}
        <ArrowBack ref={customPrevButtonRef} className="absolute top-2/4 -translate-y-1/2 z-10 left-2.5 [&.swiper-button-disabled]:opacity-35 [&.swiper-button-disabled]:cursor-auto [&.swiper-button-disabled]:pointer-events-none" />
        <ArrowForward ref={customNextButtonRef} className="absolute top-2/4 -translate-y-1/2 z-10 right-2.5 [&.swiper-button-disabled]:opacity-35 [&.swiper-button-disabled]:cursor-auto [&.swiper-button-disabled]:pointer-events-none" />
      </Swiper>
    </>
  );
};
