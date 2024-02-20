import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

export default function Carousel({array}) {

    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index

    // Define settings for the carousel
    const settings = {
      arrows:false,
      fade:true,
      dots: false, 
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 2000,
      afterChange: (currentIndex) => setCurrentSlide(currentIndex), // Update state on slide change
    };
  
    useEffect(() => {
      
      const intervalId = setInterval(() => {
        
      }, 3000); // Adjust interval as needed
  
      return () => clearInterval(intervalId); // Clear timer/animation on component unmount
    }, []);

  return (
    <div className="carousel-container" style={{ position: 'relative', zIndex: 2 }}>
      <Slider className='m-0' {...settings}>
        {array.collections.nodes.map((item, index) => 
          <div key={item.id}>
              <div className="flex justify-center items-center m-0" style={{background:'linear-gradient(transparent,#d3d3d3,transparent)' }}>
                <img src={item.image.url} key={item.image.id} className='inner_image' style={{width:'50%'}}/>
              </div>
          </div>
        )}
      </Slider>
    </div>
  )
}