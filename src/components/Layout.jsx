import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import logo from '../images/logo.svg'
import { useEffect } from 'react';
import { useRef } from 'react';

const Layout = ({ children }) => {
    const loading = useRef();
    useEffect(() => {
        loading.current.style.display = 'none';
    }, []);

    return (
        <main>
            <div ref={loading} className="overflow_box">
                <div className="loader">
                    <img src={logo} />
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div id='header-content' className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="navbar-brand-logo" src={logo} />PIRATE GALLEY
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" id="navbar-links">
                            <li className="nav-item nav-button-box">
                                <a href="#" className="nav-button">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="content">
                {children}
            </div>
        </main>
    )
}
export default Layout;