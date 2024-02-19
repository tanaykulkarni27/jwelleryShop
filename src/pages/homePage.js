import React from 'react';
import Carousel  from '../component/fadeCarousel/carousel';
// images
import banner_1 from '../assets/images/banner_1.webp'
import banner_2 from '../assets/images/banner_2.webp'
import banner_3 from '../assets/images/banner_3.webp'

// css
import './homePage.css'
import HorizontalCarousel from '../component/hozizontalCarousel/HorizontalCarousel';

export default function HomePage() {

    const array = [{
        image:banner_1,
        gradient:"linear-gradient(gray 2%, pink 90%,transparent 100%)"
    },
    {
        image:banner_2,
        gradient:"linear-gradient(transparent 2%, rgba(211,211,211) 90%,transparent 100%)"

    },
    {
        image:banner_3,
        gradient:"linear-gradient(transparent 2%, rgba(240,171,111,0.7) 90%,transparent 100%)"
    }]

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
            {/* Hello world */}
            <Carousel array={array}/>
            <div className='middleGradient below' style={{height:'400px',transform:'translateY(-150px)'}}></div> 
            <HorizontalCarousel items={video_array}/>
            
        </div>
    );
}