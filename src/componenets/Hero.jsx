import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';


function Hero() {

    const settings = {
      dots: true,            
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,  
      autoplay: true,
     autoplaySpeed: 2000,         
    };

  return (
    <div className=' w-full flex  justify-center items-center h-[600px] pt-40 font-serif'>
        <Slider {...settings} className='w-full transition-1s ease-in-out'>
          <div>
            <div className='w-full h-[600px]    justify-center items-start  bg-cover bg-center 'style={{ backgroundImage: `url(${c})` }} >
              <h4 className='  pt-30 pl-25 text-3xl text-amber-400'>Get ready ...</h4>
              <h1 className='text-white text-5xl font-bold flex flex-col     pt-2 pl-25 '>Online shopping mart </h1>
              <h1 className='text-white text-6xl font-bold flex flex-col   pt-3 pl-25 '>Gangapur city  </h1>
              <button className='border border-amber-300 rounded-2xl px-4 py-2  ml-50 mt-10 bg-amber-300  hover:bg-amber-50 cursor-pointer '>Shop now</button>
            </div>
            </div>
            <div>


            <div className='w-full h-[600px]    justify-center items-start  bg-cover bg-center 'style={{ backgroundImage: `url(${b})` }} >
              <h4 className='  pt-30 pl-25 text-3xl text-amber-400'>Get ready ...</h4>
              <h1 className='text-white text-5xl font-bold flex flex-col justify-start    pt-2 pl-25 '>Online shopping mart </h1>
              <h1 className='text-white text-6xl font-bold flex flex-col justify-start  pt-3 pl-25  '>Gangapur city  </h1>
              <button className='border border-amber-300 rounded-2xl px-4 py-2  ml-50 mt-10 bg-amber-300  hover:bg-amber-50 cursor-pointer '>Shop now</button>
            </div>
            </div>


            <div>
            <div className='w-full h-[600px]    justify-center items-start  bg-cover bg-center 'style={{ backgroundImage: `url(${a})` }} >
              <h4 className='  pt-30 pl-25 text-3xl text-amber-400'>Get ready ...</h4>
              <h1 className='text-white text-5xl font-bold flex flex-col justify-start    pt-2 pl-25 '>Online shopping mart </h1>
              <h1 className='text-white text-6xl font-bold flex flex-col justify-start  pt-3 pl-25  '>Gangapur city  </h1>
              <button className='border border-amber-300 rounded-2xl px-4 py-2  ml-50 mt-10 bg-amber-300  hover:bg-amber-50 cursor-pointer '>Shop now</button>
            </div>
            </div>
          
        </Slider>

    </div>
  )
}


export default Hero;
