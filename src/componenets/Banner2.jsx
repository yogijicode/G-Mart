import React from 'react'
import b2 from '../assets/b2.jpg';

function Banner2() {
  return (
    <div className=' h-[300px] flex justify-between m-5 rounded-2xl ' style={{ backgroundImage: `url(${b2})` }}>
        <div className='flex flex-col items-start text-violet-300 mt-20 ml-20 gap-3'>
            <h1 className='text-4xl text-white'>First <span className='text-5xl text-cyan-500'>Order offer</span></h1>
            <h1 className='text-4xl ml-40 '>GET <span className='text-6xl text-emerald-600 font-bold'>$50 off</span>  </h1>
        </div>
        
       <button className='   text-4xl bg-emerald-600 w-fit h-fit my-auto mr-30 rounded-full py-2 px-4 font-bold hover:bg-cyan-400 ' >Buy now </button>
       
    </div>
  )
}

export default Banner2
