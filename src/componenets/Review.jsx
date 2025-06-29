import React from 'react'
import cat1 from '../assets/cat1.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const reviewdata = [
    {
      img: cat1,
      name: "albert twinson",
      post: "store owner",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
    {
      img: cat1,
      name: "alex grind",
      post: "electrician",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
    {
      img: cat1,
      name: "drew anderson",
      post: "android developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
    {
      img:cat1,
      name: "alex brown",
      post: "web developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
    {
      img: cat1,
      name: "james bond",
      post: "army officer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
  ];

function Review() {

    const settings = {
        dots: true,            
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,  
        autoplay: true,
       autoplaySpeed: 2000,         
      };

  return (
    <div className='w-full mt-20'>
        <div className='flex flex-col justify-center items-center p-3 m-2 gap-6'>
            <h1 className=' text-2xl text-blue-500 mt-4 '>1300+ Customers Reviews </h1>
            <h1 className='text-5xl text-black font-semibold underline-' >Our customer love</h1>
        </div>

      <div className='w-full mt-2 mb-20  '>
            <Slider className='w-full' {...settings}>
                {
            reviewdata.map((item,index) => (
             <div className='w-full flex col justify-center items-center gap-10 ' key={index} >
                <img className='m-auto w-[300px]' src={item.img} alt="" />
                <div className='flex flex-row justify-center items-center gap-2 text-amber-300'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
               <div>
                <p className=' flex flex-col justify-center text-center mt-2 mx-20'>{item.para}</p>
               </div>
               <div className=' flex flex-row justify-center text-center mt-3 items-center text-5xl text-blue-400 gap-4'>
               <i class="fa-solid fa-comment"></i>
               <div className=' flex flex-col '>
                <h1 className='text-2xl font-semibold text-black' >{item.name}</h1>
                <h1 className=' text-xl text-gray-400'>{item.post}</h1>
               </div>
               </div>
             </div>
            ))
        }
      </Slider>

      </div>

    </div>
  )
}

export default Review
