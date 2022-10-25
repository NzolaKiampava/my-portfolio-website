import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Prudêncio Miguel',
    review: 'lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna!!'
  },
  {
    avatar: AVATAR2,
    name: 'John Heavy',
    review: 'lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna!!'
  },
  {
    avatar: AVATAR3,
    name: 'Jordania Antonio',
    review: 'lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna!!'
  },
  {
    avatar: AVATAR4,
    name: 'Edna Arieth',
    review: 'lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna!!'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <section className="testimonials">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[ Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          >
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    </section>
  )
}

export default Testimonials
