import React from 'react'

function Services() {
  return (
    <div className="w-full px-10">
    <div className="bg-gray-300 h-60 rounded-2xl flex flex-row justify-evenly items-center gap-20 mt-20 mb-10">
     <div className=' flex flex-col items-center justify-center text-5xl gap-3'>
     <i class="fa-solid fa-truck"></i>
     <h1 className='text-xl mt-4'>FASTEST DELIVERY- <span className='text-amber-600 text-3xl'>10-min</span> </h1>
     <p className='text-[20px]'>first time in gangapur city  </p>
     </div>

     <div className=' flex flex-col items-center justify-center text-5xl gap-3'>
     <i class="fa-solid fa-wallet"></i>
     <h1 className='text-xl mt-4'>BEST PRICE- <span className='text-amber-600 text-3xl'>min-10%off</span> </h1>
     <p className='text-[20px]'>best price in whole gangapur city  </p>
     </div>

     <div className=' flex flex-col items-center justify-center text-5xl gap-3'>
     <i class="fa-solid fa-handshake"></i>
     <h1 className='text-xl mt-4'>TRUSTED - <span className='text-amber-600 text-3xl'>money-back</span> </h1>
     <p className='text-[20px]'> get full refund  </p>
     </div>

    </div>
  </div>
  )
}

export default Services
