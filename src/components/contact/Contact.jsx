import React, { useRef } from 'react'
import "./contact.css"

import {MdOutlineMailOutline} from "react-icons/md"
import {TbBrandLinkedin} from "react-icons/tb"
import {IoLogoWhatsapp} from "react-icons/io"

import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ai5l18', 'template_l32kobi', form.current, 'rYy4Sx7VgejP4tMCJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()  
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            < MdOutlineMailOutline className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>kafleprakash97@gmail.com</h5>
            <a href="mailto:kafleprakash97@gmail.com" target="__blank">Send email</a>
          </article>

          <article className="contact__option">
            < TbBrandLinkedin className='contact__option__icon'/>
            <h4>Linkedin</h4>
            <h5>linkedin.com/in/prakashkafle</h5>
            <a href="https://www.linkedin.com/in/prakashkafle/" target="__blank">Get connected</a>
          </article>

          <article className="contact__option">
            < IoLogoWhatsapp className='contact__option__icon'/>
            <h4>WhatsApp</h4>
            <h5>+1(xxx)xxx-xxxx</h5>
            <a href="https://api.whatsapp.com/send?phone=4692628352" >Send message</a>
          </article>
        </div>

        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder="Your Message" required/>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      </div>


    </section>
  )
}

export default Contact