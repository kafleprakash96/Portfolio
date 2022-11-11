import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {FaUser} from "react-icons/fa"
import {RiServiceLine} from "react-icons/ri"
import {IoMdContact} from "react-icons/io"
import {BiBook} from "react-icons/bi"
import "./nav.css"

import { useState } from 'react'


const Nav = () => {

  const[activeNav,setActiveNav] = useState('#');
  return (
    <nav id='active'>
      <a href="#" onClick={ ()=> setActiveNav("#")} className={activeNav === '#' ? 'active':'' }><AiOutlineHome/></a>
      <a href="#about" onClick={ ()=> setActiveNav("#about")} className={activeNav === '#about' ? 'active':'' }><FaUser/></a>
      <a href="#service" onClick={ ()=> setActiveNav("#service")} className= {activeNav === '#service' ? 'active':''}><RiServiceLine/></a>
      <a href="#experience" onClick={ ()=> setActiveNav("#experience")} className={activeNav === '#experience' ? 'active':'' }><BiBook/></a>
      <a href="#contact" onClick={ ()=> setActiveNav("#contact")} className={activeNav === '#contact' ? 'active':'' }><IoMdContact/></a>

    </nav>
  )
}

export default Nav