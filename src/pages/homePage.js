import React from 'react';
import Carousel  from '../component/fadeCarousel/carousel';

// images
import banner_1 from '../assets/images/banner_1.webp'
import banner_2 from '../assets/images/banner_2.webp'
import banner_3 from '../assets/images/banner_3.webp'

// css
import './homePage.css'
import HorizontalCarousel from '../component/hozizontalCarousel/HorizontalCarousel';
import { Header } from '../component/header/Header';

export default function HomePage() {

    const array = {
        "collections": {
          "nodes": [
            {
              "id": "collection_id_1",
              "title": "Summer Fashion",
              "handle": "summer-fashion",
              "image": {
                "id": "image_id_1",
                "url": banner_1,
                "altText": "Summer Fashion Collection",
                "width": 1200,
                "height": 900
              }
            },
            {
              "id": "collection_id_2",
              "title": "Tech Gadgets",
              "handle": "tech-gadgets",
              "image": {
                "id": "image_id_2",
                "url": banner_2,
                "altText": "Latest Tech Gadgets Collection",
                "width": 1000,
                "height": 800
              }
            },
            {
              "id": "collection_id_3",
              "title": "Fitness Gear",
              "handle": "fitness-gear",
              "image": {
                "id": "image_id_3",
                "url": banner_3,
                "altText": "Fitness Gear Collection",
                "width": 1500,
                "height": 1000
              }
            }
          ]
        }
      }
      

const video_array = [
    'https://cdn.storista.io/stories/clips/a4b2wuRroWFqisMGLJLLjl9RBrtFKWUvppR00qkDRDNE.mp4',
    'https://cdn.storista.io/stories/clips/wSUlVSYvnA1ysfKTdVyEjD1u01aHazxgxbOCENaR5PQE.mp4',
    'https://cdn.storista.io/stories/clips/E5bCjzTDoTMSfG500jnA2YrMqCmdgx1Pz5g4GY37uTc4.mp4',
    'https://cdn.storista.io/stories/clips/4Ewq5TrORRH6izggc2ISTsfcJ02x0001wrP1av6yC3FZxk.mp4',
    'https://cdn.storista.io/stories/clips/a4b2wuRroWFqisMGLJLLjl9RBrtFKWUvppR00qkDRDNE.mp4',
    'https://cdn.storista.io/stories/clips/wSUlVSYvnA1ysfKTdVyEjD1u01aHazxgxbOCENaR5PQE.mp4',
    'https://cdn.storista.io/stories/clips/E5bCjzTDoTMSfG500jnA2YrMqCmdgx1Pz5g4GY37uTc4.mp4',
    'https://cdn.storista.io/stories/clips/4Ewq5TrORRH6izggc2ISTsfcJ02x0001wrP1av6yC3FZxk.mp4'
]

    return (
        <div>
          <Header />
            {/* Hello world */}
            <Carousel array={array}/>
            <div className='middleGradient below' style={{height:'400px',transform:'translateY(-150px)'}}></div> 
            <div style={{transform:'translateY(-150px)'}}>
                <HorizontalCarousel items={video_array}/>
            </div>
            
        </div>
    );
}