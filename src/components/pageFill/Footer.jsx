import React from 'react'
import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img className="bi" width="30" src={logo} />
            </a>
            <span className="galley-footer">PIRATE GALLEY</span>
        </div>
    </footer>
  )
}

export default Footer;