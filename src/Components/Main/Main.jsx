import React from 'react'
import './main.css'
import Brand from '../../assets/hero/brand.svg'
import Software from '../../assets/hero/hero-image.svg'
import DottedImg from '../../assets/hero/dotted-shape.svg'

export default function Main() {
  return (
    <>
      <div className='ContentBackContainer'>
        <h1>Open-Source Web Template <br />
          Saas,Startup,Apps and More
        </h1>
        <p>MultiDisciplinary Web Template  BUilt with Your Favourites<br />
          Teachnology - HTML Bootstrap, Tailwind and React NextJs
        </p>
        <div className='btnContainer'>
          <button className='DownloadBtn'>Download Now</button>
          <a href='' className='LearnMoreLink'>Learn More</a>
        </div>
        <div className="brandSvgContainer">
          <img src={Brand} alt='brand.svg' className='brandSvg'></img>
        </div>
        <div className='DottedImg'>
          <img src={DottedImg} alt='' className='DottedImg' />
        </div>
        <div className='softwareImgContainer'>
          <img src={Software} alt="" />
        </div>
        <div className='DownDottedImg'>
          <img src={DottedImg} alt='DottedImg' className='DottedImg' />
        </div>
      </div>
      <div className='anotherSectionOfMainSection'>
        <h3>Features</h3>
        <section className='contentSection'>
          <h1>Main Features Of Play</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur deserunt <br/>
          dignissimos, sint, cum pariatur natus reprehenderit eum </p>
        </section>
        <div className='cardsContainer'>
          <div className='cardDesign'>
            <div className='opdiv'>
            <div className='cardIcon'>
              <i className="fa-solid fa-gift fa-2xl " style={{fontSize:"30px",color:"#fff",paddingLeft:"25%",opacity:"1",
              marginBottom:'5px'}} />
            </div>
            </div>
            <h3>Free and Open-Source</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse consequatur.</p>
            <a href='/'>Learn More</a>
            
          </div>
          <div className='cardDesign'>
            <div className='opdiv'>
            <div className='cardIcon'>
              <i className="fa-solid fa-arrows-up-down-left-right " style={{fontSize:"30px",color:"#fff",paddingLeft:"25%",opacity:"1",
              marginBottom:'5px'}}></i>
            </div>
            </div>
            <h3>Multipurpose Template</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse consequatur.</p>
            <a href='/'>Learn More</a>
            
          </div>
          <div className='cardDesign'>
            <div className='opdiv'>
            <div className='cardIcon'>
              <i className="fa-solid fa-grip fa-2xl " style={{fontSize:"30px",color:"#fff",paddingLeft:"25%",opacity:"1",
              marginBottom:'5px'}} />
            </div>
            </div>
            <h3>Hight-Quality Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse consequatur.</p>
            <a href='/'>Learn More</a>
            
          </div>
          <div className='cardDesign'>
            <div className='opdiv'>
            <div className='cardIcon'>
              <i className="fa-solid fa-layer-group fa-2xl" style={{fontSize:"30px",color:"#fff",paddingLeft:"25%",opacity:"1",
              marginBottom:'5px'}}></i>
            </div>
            </div>
            <h3>All Essential Elements</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse consequatur.</p>
            <a href='/'>Learn More</a>
            
          </div>
          
        </div>
        


        

          
      </div>
      
    </>
  )
}
