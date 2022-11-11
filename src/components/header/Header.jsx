import React from 'react'
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocial from './HeaderSocial'
import "./header.css"

const header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello! I am</h5>
      <h1>Prakash</h1>
      <h5 className='text-light'>Web Developer</h5>
      <CTA />
      < HeaderSocial/>
      <div className='me'>
        <img src={ME} alt="" />
      </div>

      
      </div>

    </header>
  )
}

export default header