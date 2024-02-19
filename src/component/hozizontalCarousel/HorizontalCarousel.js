// HorizontalCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './horizontalCarousel.css'

const HorizontalCarousel = ({ items }) => {
  const settings = {
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 5, // Set the number of items to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='ml-5'>
        <div>
            <Slider {...settings} >
            {items.map((item, index) => (
                <div key={index} className="carousel-item rounded-lg">
                    <video src={item} className='rounded-xl' style={{width:'15vw',height:'auto'}} autoPlay loop />
                </div>
            ))}
            </Slider>
        </div>
    </div>
  );
};

export default HorizontalCarousel;
