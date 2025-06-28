import React from 'react'
import './aboutus.css'
import AboutSvg from '../../assets/about/about-image.svg'

export default function Aboutus() {
  return (
    <div className='MainBackgroundContainer'>
        <div className='headContent'>
            <button className='btnhead'>About Us</button>
            <h2>Brilliant Toolkit to Build<br/>
            Nextgen Website Faster</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit sit ea, fuga saepe dolorum aliquam ex facere, porro esse numquam deleniti enim? Recusandae,
            illo facere ullam mollitia doloremque expedita!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, omnis magni. Debitis delectus odio quo corrupti, temporibus rerum </p>
            <button>Learn More</button>
        </div>
        <div className='sideSvgContainer'>
          <img src={AboutSvg} alt='AboutSvgImg'/>
        </div>

    </div>
  )
}
