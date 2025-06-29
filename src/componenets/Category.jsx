import React from 'react'
import cat1 from '../assets/cat1.jpg';

function Category() {
  return (
    <div className=' h-80 flex  justify-start items-centre gap-2 mt-40   bg-gray-100 font-serif'>
      <div className='flex flex-col justify-start items-center m-5 mt-20'>
        <h4 className='text-2xl p-4 text-red-700'>Categories</h4>
        <h1 className='text-3xl  pb-4'>Favourites items</h1>
        <button className=' py-2 px-8  mt-4 text-red-700 border rounded-2xl bg-blue-500 hover:bg-amber-700'>View all</button>
      </div>

      <div className=' flex flex-row justify-evenly items-center gap-10'>
        <div className='flex flex-col justify-center items-center pt-5 pl-5'>
            <img src={cat1} alt="" className='bg-cover  h-45  rounded-full' />
            <h1 className='pt-3 text-2xl'>Milk</h1>
        </div>

        <div className='flex flex-col justify-center items-center pt-5 pl-5'>
            <img src={cat1} alt="" className='bg-cover  h-45  rounded-full' />
            <h1 className='pt-3 text-2xl'>Milk</h1>
        </div>

        <div className='flex flex-col justify-center items-center pt-5 pl-5'>
            <img src={cat1} alt="" className='bg-cover  h-45  rounded-full' />
            <h1 className='pt-3 text-2xl'>Milk</h1>
        </div>

        <div className='flex flex-col justify-center items-center pt-5 pl-5'>
            <img src={cat1} alt="" className='bg-cover  h-45  rounded-full' />
            <h1 className='pt-3 text-2xl'>Milk</h1>
        </div>

        <div className='flex flex-col justify-center items-center pt-5 pl-5'>
            <img src={cat1} alt="" className='bg-cover  h-45  rounded-full' />
            <h1 className='pt-3 text-2xl'>Milk</h1>
        </div>
      </div>
    </div>
  )
}

export default Category
