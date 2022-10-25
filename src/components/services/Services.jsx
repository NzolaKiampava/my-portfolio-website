import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* END OF ul/UX */}

        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="services">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* END OF Mobile Development */}
      </div>
    </section>
  )
}

export default Services
