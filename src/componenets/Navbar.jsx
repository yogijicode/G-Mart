import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[15px] flex felx-row justify-between items-center bg-gray-100 p-4 lg:p-10 fixed  top-0 left-0 z-50 font-serif'>
      <div className='flex flex-row  justify-between items-center gap-2'>
     <a href=" #"><img  className=' bg-cover h-[50px] w-[120px]  lg:h-[60px] items-start 'src="logom.png" alt="" /></a>
     {/* <a href="#"><p className='  font-serif  text-md lg:text-2xl font-bold text-emerald-600 font'>Y-Mart</p></a> */}
 </div> 
 <div className=' flex flex-col justify-center items-center text-2xl gap-1'>
 <i class="fa-solid fa-location-dot" ></i>
 <p className='text-sm'>Gangapur...</p>

 </div>
<div className='flex flex-row justify-center items-center gap-15 p-5 '>
    <a href="#" className=' text-0.5xl lg:text-xl text-shadow-amber-50 hover:underline  hover:text-gray-400'>Home</a>
    <a href="#" className='ltext-0.5xl lg:text-xl text-shadow-amber-50 hover:underline   hover:text-gray-400'>Categories</a>
    <a href="#" className='text-0.5xl lg:text-xl text-shadow-amber-50 hover:underline   hover:text-gray-400 '>Offers</a>
    </div>

    <div className=" flex felx-row  items-center">
      <input  className='  bg-neutral-50  rounded-l-lg w-100 p-2  border  border-gray-900 'type="text" placeholder='Search items' />
      <label htmlFor="" className='bg-blue-400 p-2 rounded-r-lg border  border-gray-900  '><i class="fa-solid fa-magnifying-glass"></i></label>
    </div>

    <div className='flex flex-row justify-center items-center  gap-15 '>
      <div className='felx flex-col justify-center items-center  '>
      <i class="fa-solid fa-user"></i>
     <p className='text-sm'>Login</p>
      </div>

      <div className='felx flex-col justify-center items-center  '>
      <i class="fa-solid fa-cart-shopping" ></i>
     <p className='text-sm'>Cart</p>
      </div>
    </div>
    </div>
   

  )
}

export default Navbar
