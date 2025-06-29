import { useState } from 'react'

import './App.css'
import Hero from './componenets/Hero'
import Navbar from './componenets/Navbar'
import Category from './componenets/Category'
import Banner from './componenets/Banner'
import Services from './componenets/Services'
import Item from './componenets/Item'
import Review from './componenets/Review'
import Banner2 from './componenets/Banner2'
import Footer from './componenets/Footer'

function App() {
 
  return (
    <div className=' w-full  overflow-x-hidden font-serif'>
      
      <Navbar/>
      <Hero/>
      <Category/>
      <Banner/>
      <Services/>
      <Item/>
      <Review/>
      <Banner2/>
      <Footer/>
      
      </div>
  )
}

export default App
