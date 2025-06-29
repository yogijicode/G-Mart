import React from 'react'
import a from '../assets/app.jpg';
import b from '../assets/pay.png';
import c from '../assets/play.jpg';


function Footer() {
  return (
    <div>
    <div className='w-full  bg-gray-200 flex flex-row  justify-between items-center h-[450px] realtive'>
      <div className=' flex flex-col  justify-center items-start ml-8 mt-10 '>
      <a href=" #"><img  className=' bg-cover h-[300px]  w-[140px]  lg:h-[60px] items-start 'src="logom.png" alt="" /></a>
        <h1 className='text-[22px] font-semibold my-2'>Contact</h1>
        <p className='text-[20px] text-gray-700' >Address1: <span className='text-black text-[16px]'>Agrasen coloy,ggc</span></p>
        <p className='text-[20px] text-gray-700' >Address2: <span className='text-black text-[16px]'>Agrasen coloy,ggc</span></p>
        <p className='text-[20px] text-gray-700' >Address3: <span className='text-black text-[16px]'>Agrasen coloy,ggc</span></p>
        
    

      <div className='pl-10 my-4'>
      <h1 className='text-[18px] '>Follow us</h1>
      <div className='  text-[40px] gap-6'>
        <a href="" className='p-2'><i class="fa-brands fa-instagram text-fuchsia-300  hover:text-fuchsia-600"></i></a>
        <a href="" className='p-2'><i class="fa-brands fa-facebook text-blue-300  hover:text-blue-600"></i></a>
        <a href="" className='p-2'><i class="fa-brands fa-whatsapp text-emerald-200   hover:text-emerald-500"></i></a>
      </div>
      </div>
      </div>

      <div className=' flex flex-col  justify-center items-start   '> 
        <h1 className='text-[24px] font-semibold pb-10 '>Account</h1>
        <a href="" className='hover:underline hover:text-[22px]' >Sign in</a>
        <a href="" className='hover:underline hover:text-[22px]'>address</a>
        <a href="" className='hover:underline hover:text-[22px]'>Delivery information</a>
        <a href="" className='hover:underline hover:text-[22px]'>orders</a>
        <a href="" className='hover:underline hover:text-[22px]'>sign out</a>
      </div>

      <div className=' flex flex-col  justify-center items-start'> 
        <h1 className='text-[24px] font-semibold pb-10 '>Offers </h1>
        <a href="" className='hover:underline hover:text-[22px]'>Coupons</a>
        <a href="" className='hover:underline hover:text-[22px]'>Sale</a>
        <a href="" className='hover:underline hover:text-[22px]'>Card offers</a>
        <a href="" className='hover:underline hover:text-[22px]'>T&C</a>
        <a href="" className='hover:underline hover:text-[22px]'>Contact us</a>
      </div>

      <div className=' flex flex-col  justify-center items-start mr-20  '> 
        <h1 className='text-[24px] font-semibold pb-4 '>Install app </h1>
         <h1 className='py-2 text-[20px]'>From app store </h1>
         <div className='flex flex-row gap-4 '>
         <a href="https://play.google.com/store/apps/details?id=in.dmart&hl=en_IN"><img src={a} alt="" /></a>
         <a href="https://play.google.com/store/apps/details?id=in.dmart&hl=en_IN"><img src={c} alt="" /></a>
         </div>
        
         <div className=' gap-4'>

         <h1 className='py-2 text-[20px]' >Payment option</h1>
         <div className='text-3xl space-x-8'>
         <i className="fa-solid fa-wallet text-amber-600 hover:text-amber-700"></i>
         <i class="fa-solid fa-indian-rupee-sign text-gray-400 hover:text-gray-500"></i>
         <i class="fa-solid fa-handshake text-yellow-500 hover:text-yellow-600"></i>
         </div>
         </div>
      </div>

     
      </div>
      <h1 className='flex flex-col justify-center items-center text-center  bg-gray-200 pb-5'>@Copywrite G-mart.All Rights Reserved</h1>
      <h1 className='flex flex-col justify-center items-center text-center text-2xl bg-emerald-500 w-full font-bold underline '>G-MART</h1>
      
    
    
    </div>
   
  )
}

export default Footer
