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
              <p>Design technology consulting.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Content strategy.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Information architecture</p>
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
              <p>Content Management System</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Shopping Cart | Online Ordering System | Online Payments.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Mobile-optimized Website | Email Newsletter</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Document Management System.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Search Engine Optimization(SEO) | Web Hosting</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Password-Protected Pages | Client Area</p>
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
              <p>Custom Android app development</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Maintenance and ongoing support.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>UI/UX design services.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Mobile app porting.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Power management, notification & geofencing services</p>
            </li>
          </ul>
        </article>
        {/* END OF Mobile Development */}
      </div>
    </section>
  )
}

export default Services
