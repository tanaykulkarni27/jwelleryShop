import React from 'react';
import Carousel  from '../component/carousel';
// images
import banner_1 from '../assets/images/banner_1.webp'
import banner_2 from '../assets/images/banner_2.webp'
import banner_3 from '../assets/images/banner_3.webp'

// css
import './index.css'

export default function Home() {

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

    return (
        <div>
            <Carousel array={array}/>
            <div className='w-100 middleGradient below' style={{height:'400px',transform:'translateY(-150px)'}}></div>
        </div>
    );
}