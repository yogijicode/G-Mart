import React from 'react'
import cat1 from '../assets/cat1.jpg';


export const products = [
  {
    img: cat1,
    category: "Earphones",
    name: "Smart Earbuds",
    price: "$45.98",
  },
  {
    img: cat1,
    category: "Speakers",
    name: "Bluetooth Speakers",
    price: "$192.23",
  },
  {
    img: cat1,
    category: "Smart Watch",
    name: "Smart Watch",
    price: "$12.35",
  },
  {
    img:  cat1,
    category: "Accessories",
    name: "Pendrive",
    price: "$11.98",
  },
  {
    img:  cat1,
    category: "Computers Accessories",
    name: "Asus Tuff F15",
    price: "$897.28",
  },
  {
    img:  cat1,
    category: "Music & Videos",
    name: "Wireless Headset",
    price: "$67.88",
  },
  {
    img:  cat1,
    category: "Computer Accessories",
    name: "Wireless Mouse",
    price: "$32.78",
  },
  {
    img:  cat1,
    category: "Films & Gaming",
    name: "DSLR 360 view",
    price: "$145.28",
  },
];

function Item() {
  return (
    <div  id='products' className=' w-full flex flex-col justify-center items-center  bg-gray-200'>
      <div className='w-full flex flex-col justify-center items-center mt-8 gap-5 bg-gray-200 py-10'>
        <h1 className='text-4xl font-bold '>DAILY NEEDS</h1>
        <h1 className='text-2xl font-semibold '>Trending items</h1>
      </div>

     <div className=' grid grid-cols-4 w-full justify-center items-center gap-6 px-4 py-5 '>
        {
         products.map((item,index) =>(
            <div key ={index} className='flex flex-col justify items-center bg-white relative rounded-2xl  '>
             <img className='rounded-full pt-4 ' src={item.img} alt="" />
             <div className='flex justify-center items-center gap-3 absolute top-[10px]'>
                <div className='bg-purple-900 rounded-full  text-white p-3 px-4 '>
                <i class="fa-solid fa-heart hover:text-red-700"></i>
                </div>
                <div className='bg-purple-900 rounded-full  text-white p-3 px-4 '>
                <i class="fa-solid fa-cart-plus hover:text-blue-600"></i>
                </div>
             </div>
             <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className=' text-gray-500  '>{item.category}</h1>
                <h1 className=' text-black text-2xl  '>{item.name}</h1>
                <h1 className=' text-blue-800 text-3xl p-2   '>{item.price}</h1>
             </div>
             <div className='mt-3 w-full '>
                <hr />
                <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-start items-center p-4 text-amber-300'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </div>
                <button className='px-3 m-2 text-xl bg-emerald-300 rounded-full hover:bg-white'>Sale</button>
                </div>
             </div>
            </div>
        ))
}

     </div>
     <button className='text-3xl hover:bg-amber-300 rounded-full px-4 py-2 bg-gray-500 m-2 mt-10 mb-20'>VIEW MORE</button>
    </div>
  );
}

export default Item
