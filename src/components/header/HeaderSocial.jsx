import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"


const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/prakashkafle" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.github.com/kafleprakash96" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocial