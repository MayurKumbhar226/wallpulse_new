import React from "react"
import image from "../../assets/images/input.png"
import "./about.css"

export const About = () => {
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>About Me</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src={image} alt='img' />
                <img src={image} alt='image' class='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label htmlFor=''>Mayur Kumbhar</label>
              
              <label htmlFor=''>Software Engineer</label>
              
              <label htmlFor=''>R C Patel Institute Of Technology</label>
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
