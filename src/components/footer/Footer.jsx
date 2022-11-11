import React from 'react'

import {FaFacebook} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"

import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> PRAKASH WEB </a>
      <ui className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
      </ui>
      <div className='footer__socials'>
        <a href='https://www.facebook.com/prakash1996' target="__blank">< FaFacebook/></a>
        <a href='https://www.instagram.com/' target="__blank"><BsInstagram /></a>
        <a href='https://www.twitter.com/' target="__blank"><AiFillTwitterCircle /></a>
      </div>

      <div className='footer__copyright'>
        <small> &copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer