import React from 'react'
import ME from "../../assets/me1.png"
import {FaAward} from "react-icons/fa"
import {GoProject} from"react-icons/go"
import {MdSchool} from "react-icons/md"
import "./about.css"

const About = () => {
  return (
    <section id='about' >
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container"> 
    <div className="about__me">
      <div className="about-me-image">
        <img src={ME} alt="about_me_image" />
      </div>
    </div>

    <div className="about__content">
        <div className="about__cards">
          <article className='about-card'>
            < FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>5+ Years Working</small>
          </article>

          

          <article className='about-card'>
            < GoProject className='about__icon' />
            <h5>Projects</h5>
            <small>50+ projects completed</small>
          </article>

          <article className='about-card'>
            < MdSchool className='about__icon' />
            <h5>Education</h5>
            <small>University of Texas At Arlington</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam sunt animi doloremque autem consequuntur aut, explicabo officiis consequatur quasi suscipit eligendi quidem molestiae modi fugiat earum debitis eos optio porro.

        </p>

        <a href="#contact" className='btn btn-primary'>Lets Connect</a>
    </div>
    </div>
    </section>
  )
}

export default About