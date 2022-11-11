import React from 'react'
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import "./portfolio.css"


const data =[
  {
    id:1,
    image:IMG1,
    title:'Chat App',
    github:'https://github.com/kafleprakash96',
    demo:'https://github.com/kafleprakash96',
    program:'Java'
  },

  {
    id:2,
    image:IMG2,
    title:'Hotel Management System',
    github:'https://github.com/kafleprakash96',
    dem0:'https://github.com/kafleprakash96',
    program:'Python'
  },

  {
    id:3,
    image:IMG3,
    title:'Liquor Inventory App',
    github:'https://github.com/kafleprakash96',
    demo:'https://github.com/kafleprakash96',
    program:'Flutter'
  },

  {
    id:4,
    image:IMG4,
    title:'Wisdom Pet Dog',
    github:'https://github.com/kafleprakash96',
    demo:'https://github.com/kafleprakash96',
    program:'Python'
  },

  {
    id:5,
    image:IMG5,
    title:'Tic Tac Toe',
    github:'https://github.com/kafleprakash96',
    demo:'https://github.com/kafleprakash96',
    program:'Java'
  },

  {
    id:6,
    image:IMG6,
    title:'Snake Game',
    github:'https://github.com/kafleprakash96',
    demo:'https://github.com/kafleprakash96',
    program:'Python'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo,program})=>{
            return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>
            <small className="small-class">{program}</small>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'> Github</a>
            <a href={demo} className='btn' target='_blank'> Live Demo</a>
            </div>
        </article>
            )
      
        }
        )
      }

        




      </div>
    </section>
  )
}

export default Portfolio