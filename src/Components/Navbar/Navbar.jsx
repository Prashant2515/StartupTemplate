import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    
        <div className='NavbarBackContainer'>
            <div className='NavbarHeadName'>
                <h3>Startup </h3>
            </div>
            <div className='NavbarList'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Pricing</a></li>
                    <li><a href='/'>Teams</a></li>
                    <li><a href='/'>Contact</a></li>
                    <li><a href='/'>Pages</a></li>
                </ul>
            </div>
            <div className='NavbarBtnContainer'>
                <button className='signInBtn'>Sign In</button>
                <button className='signUpBtn'>Sign Up</button>

            </div>

        </div>
   
    
    
  )
}
