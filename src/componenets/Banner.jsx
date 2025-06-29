import React from 'react'
import b1 from '../assets/b1.jpg';


function Banner() {
  return (
    <div className='w-full flex flex-row justify-evenly items-center gap-10 mt-20  px-8  '>
      <div className='items-start flex flex-col  justify-start h-60 w-full rounded-3xl' style={{backgroundImage:`url(${b1})`}}>
     <h1 className='mt-13 ml-5 text-3xl border px-3  border-amber-300 rounded bg-white'>GET <span className='text-blue-500 font-bold'>50% OFF</span></h1>
     <h1 className='mt-5 ml-8 text-2xl  px-3  rounded bg-white'>On  <span className='text-green-600 font-semibold'>Vegetables </span></h1>
     <button className='text-xl bg-green-400 hover:bg-amber-50 ml-15 mt-4 py-2 px-3 rounded-2xl'>Buy now</button>
      </div>

      <div className='items-start flex flex-col  justify-start h-60 w-full rounded-3xl' style={{backgroundImage:`url(${b1})`}}>
     <h1 className='mt-13 ml-5 text-3xl border px-3  border-amber-300 rounded bg-white'>GET <span className='text-blue-500 font-bold'>50% OFF</span></h1>
     <h1 className='mt-5 ml-8 text-2xl  px-3  rounded bg-white'>On  <span className='text-green-600 font-semibold'>Vegetables </span></h1>
     <button className='text-xl bg-green-400 hover:bg-amber-50 ml-15 mt-4 py-2 px-3 rounded-2xl'>Buy now</button>
      </div>

      <div className='items-start flex flex-col  justify-start h-60 w-full rounded-3xl' style={{backgroundImage:`url(${b1})`}}>
     <h1 className='mt-13 ml-5 text-3xl border px-3  border-amber-300 rounded bg-white'>GET <span className='text-blue-500 font-bold'>50% OFF</span></h1>
     <h1 className='mt-5 ml-8 text-2xl  px-3  rounded bg-white'>On  <span className='text-green-600 font-semibold'>Vegetables </span></h1>
     <button className='text-xl bg-green-400 hover:bg-amber-50 ml-15 mt-4 py-2 px-3 rounded-2xl'>Buy now</button>
      </div>
    </div>
  )
}

export default Banner
