import { Image } from '@shopify/hydrogen'
import React from 'react'

export default function CollectionBanner({BannerData}) {
  return (
    <div className="relative">
        <Image data={{altText:'banner image',url:BannerData.BannerImage,width:'100vw',height:'50vh'}} className="w-full h-6/12" style={{border:'1px solid red'}}/>
        <div className="flex flex-col justify-center items-center" style={bannerDataStyle}>
            <div className="text-3xl" style={{fontColor:BannerData.BannerTextData.BannerFontColor}}>{BannerData.BannerTextData.Title}</div>
            <div className="text-lg" style={{fontColor:BannerData.BannerTextData.BannerFontColor}}>{BannerData.BannerTextData.Description}</div>
        </div>
    </div>
  )
}

const bannerDataStyle = {
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translateX(-50%)'
}