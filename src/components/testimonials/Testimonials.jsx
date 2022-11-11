import React from 'react'

import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"
import avatar3 from "../../assets/avatar3.jpg"
import avatar4 from "../../assets/avatar4.jpg"

import "./testimonials.css"

import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
       <h5>Reviews from Client</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container' 
      
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar1} alt='Avatar 1'/>
          </div>
          <h5 className='client__name'>Dipika Bhandari</h5>
            <h6 className='client__profession'>Network Engineer</h6>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit quae nisi quam, magni impedit tenetur! Qui neque iusto aliquam consequatur 
              tempore cum, commodi vel nobis ipsum eum excepturi dignissimos!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar2} alt='Avatar 2'/>
            

          </div>

          <h5 className='client__name'>Padam Neupane</h5>
            <h6 className='client__profession'>Mathematician</h6>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit quae nisi quam, magni impedit tenetur! Qui neque iusto aliquam consequatur 
              tempore cum, commodi vel nobis ipsum eum excepturi dignissimos!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar3} alt='Avatar 3'/>
          
          </div>
          <h5 className='client__name'>Nishan Pathak</h5>
            <h6 className='client__profession'>Software Developer</h6>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit quae nisi quam, magni impedit tenetur! Qui neque iusto aliquam consequatur 
              tempore cum, commodi vel nobis ipsum eum excepturi dignissimos!
            </small>

        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar4} alt='Avatar 4'/>
          

          </div>
          <h5 className='client__name'>Sandesh Bhusal</h5>
            <h6 className='client__profession'>Civil Engineer</h6>
            <small className='client__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit quae nisi quam, magni impedit tenetur! Qui neque iusto aliquam consequatur 
              tempore cum, commodi vel nobis ipsum eum excepturi dignissimos!
            </small>
        </SwiperSlide>

      </Swiper>


    </section>
  )
}

export default Testimonials