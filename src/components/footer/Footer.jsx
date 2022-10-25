import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>KIAMPAVA</a>

      <ul className='permalinks'>
        <li><a href="#"></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/nzolaantonio.kiampava"><FaFacebook /></a>
        <a href="https://linkedin.com/in/nzola-kiampava-13b117219"><BsLinkedin /></a>
        <a href="https://github.com/NzolaKiampava"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KIAMPAVA Developer, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer