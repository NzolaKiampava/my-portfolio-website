import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/covid19.png'
import IMG2 from '../../assets/netflix.png'
import IMG3 from '../../assets/linkedinclone.png'
import IMG4 from '../../assets/myportfolio.png'
import IMG5 from '../../assets/itelsocial.png'
import IMG6 from '../../assets/socialbook.png'


// DO NOT USE IMAGE IN PRODUCTION 

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'COVID-19 Tracker',
    github: 'https://github.com/NzolaKiampava/Covid19-Tracker',
    demo: 'https://covid-19-tracker-6937e.web.app/'
  },
  {
    id: 2, 
    image: IMG2,
    title: 'NetFlix Clone',
    github: 'https://github.com/NzolaKiampava/Netflix-clone',
    demo: 'https://netflix-clone-75965.web.app/'
  },
  {
    id: 3, 
    image: IMG3,
    title: 'LinkedIn Clone',
    github: 'https://linkedin-clone-fb083.web.app/',
    demo: 'https://linkedin-clone-fb083.web.app/'
  },
  {
    id: 4, 
    image: IMG4,
    title: 'My Portfolio',
    github: 'https://github.com/NzolaKiampava/my-portfolio-website',
    demo: 'https://covid-19-tracker-6937e.web.app/'
  },
  {
    id: 5, 
    image: IMG4,
    title: 'ItelSocial - Full and Complete Social Media Plataform',
    github: 'https://github.com/NzolaKiampava/itelsocial2',
    demo: 'https://covid-19-tracker-6937e.web.app/'
  },
  {
    id: 6, 
    image: IMG4,
    title: 'SocialBook - Social Network UI',
    github: 'https://github.com/NzolaKiampava/SocialBook',
    demo: 'https://covid-19-tracker-6937e.web.app/'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn'>GitHub</a>
                  <a href={demo} target='__blank' className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
