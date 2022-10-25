import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/nzola-kiampava-13b117219" target="__blank"><BsLinkedin/></a>
      <a href="https://github.com/NzolaKiampava" target="__blank"><BsGithub /></a>
      <a href="https://dribble.com" target="__blank"><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials
