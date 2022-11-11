import React from 'react'
import {IoIosCheckmark} from "react-icons/io"
import "./service.css"

const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
          <article className='service'>
            <div className='service__head'>
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>

          {/* End of UI/UX */}


          <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>


          <article className='service'>
            <div className='service__head'>
              <h3>Software Developer</h3>
            </div>

            <ul className='service__list'>

            <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
              <IoIosCheckmark className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>

      </div>

    </section>
  )
}

export default Service