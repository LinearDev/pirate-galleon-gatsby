import React from 'react'
import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer>
        <div className="row align-items-center">
            <a href="/" className="col-md-8 text-decoration-none footer-logo">
                <img width="30" src={logo} />
                PIRATE GALLEY
            </a>
            <div className='col-md-4 footer-dev'>Developed by<a href='https://lineardev.net'>LinearDev</a></div>
        </div>
    </footer>
  )
}

export default Footer;