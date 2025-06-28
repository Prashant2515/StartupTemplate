import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Aboutus from './Components/About Us/Aboutus'
import Pricing from './Components/pricing/Pricing'
import './App.css'

export default function App() {
  return (
    <div className='MainContainer'>
        <Navbar/>
        <div className='MainSection'>
          <Main/> 
        </div>
        <div className='AboutSection'>
          <Aboutus/>
        </div>
        <div className='PricingSection'>
          <Pricing/>
        </div>
    </div>
  )
}
