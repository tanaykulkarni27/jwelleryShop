import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

export default function Carousel({array}) {

    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index

    // Define settings for the carousel
    const settings = {
      fade:true,
      dots: false, // Show pagination dots
      infinite: true, // Loop through slides continuously
      slidesToShow: 1, // One slide visible at a time
      slidesToScroll: 1, // One slide to scroll on arrow click
      autoplay: true, // Enable autoplay with a pause duration
      autoplaySpeed: 2000, // Duration between autoplay transitions
      afterChange: (currentIndex) => setCurrentSlide(currentIndex), // Update state on slide change
    };
  
    useEffect(() => {
      // Optionally reset timer/animation when component mounts or changes
      const intervalId = setInterval(() => {
        // Implement your custom timer/animation logic here
      }, 3000); // Adjust interval as needed
  
      return () => clearInterval(intervalId); // Clear timer/animation on component unmount
    }, []);

  return (
    <div className="carousel-container" style={{ position: 'relative', zIndex: 2 }}>
      <Slider {...settings}>
        {array.map((item, index) => 
          <div className=' m-0'>
            <div className='d-flex justify-content-center align-items-center m-0' style={{background:item.gradient}}>
                <img src={item.image} className='inner_image w-75'/>
            </div>
          </div>
        )}
      </Slider>
    </div>
  )
}
