// HorizontalCarousel.js
import React from "react";
import Slider from "react-slick";
import slickcss from  "slick-carousel/slick/slick.css";
import slickTheme from "slick-carousel/slick/slick-theme.css";
import localHorizontalCarousel from "./horizontalCarousel.css";
import { Video } from "@shopify/hydrogen";

const HorizontalCarousel = ({ items }) => {
  const settings = {
    prevArrow: <PrevSlide />,
    nextArrow: <NextSlide />,
    infinite: true,
    speed: 300,
    slidesToShow: 6, // Set the number of items to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ml-5">
      <div>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="carousel-item rounded-lg">
              <Video
                data={item}
                className="rounded-xl"
                style={{ width: "15vw", height: "auto" }}
                autoPlay
                loop
                muted
                
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


const NextSlide = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slick-arrow-next rounded-full rounded-full bg-white p-1"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M4 11H16.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4z" />
    </svg>
  </button>
);

const PrevSlide = ({ onClick }) => (
  <button onClick={onClick} className="slick-arrow-prev rounded-full bg-white">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
    </svg>
  </button>
);



export function links() {
  return [
    {rel: 'stylesheet', href: slickcss},
    {rel: 'stylesheet', href: slickTheme},
    {rel: 'stylesheet', href: localHorizontalCarousel}
  ]
}


export default HorizontalCarousel;
