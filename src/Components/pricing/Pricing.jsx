import React from 'react'
import './pricing.css'

export default function Pricing() {
  return (
    <div className='MainPricingBackgroundContainer'>
        <h2>Pricing</h2>
        <h1>Our Pricing Plans</h1>
        <p>There are many variations of passages of Lorem ipsum available<br>
        </br>but the majority have suffered alteration in some form
        </p>
        <div className='pricingCardContainer'>
            <div className='pricingCard'>
              <h2>Starting From</h2>
              <h3>$ 19.99/mo</h3>
              <div className='insidePricingCard'>
                <p>5 Users</p>
                <p>All UI Components</p>
                <p>Lifetime access</p>
                <p>Free updates</p>
                <p>Use 1 (one) project</p>
                <p>4 Months support</p>
              </div>
              <button className='purchasebtn'>Purchase Now</button>
                
            </div>
             <div className='pricingCard'>
              <h2>Starting From</h2>
              <h3>$ 19.99/mo</h3>
              <div className='insidePricingCard'>
                <p>5 Users</p>
                <p>All UI Components</p>
                <p>Lifetime access</p>
                <p>Free updates</p>
                <p>Use 1 (one) project</p>
                <p>4 Months support</p>
              </div>
              <button className='purchasebtn'>Purchase Now</button>
                
            </div>
             <div className='pricingCard'>
              <h2>Starting From</h2>
              <h3>$ 19.99/mo</h3>
              <div className='insidePricingCard'>
                <p>5 Users</p>
                <p>All UI Components</p>
                <p>Lifetime access</p>
                <p>Free updates</p>
                <p>Use 1 (one) project</p>
                <p>4 Months support</p>
              </div>
              <button className='purchasebtn'>Purchase Now</button>
                
            </div>
        </div>
     
    </div>
  )
}
