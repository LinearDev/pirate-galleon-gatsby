import React, { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import logo from '../images/logo.svg'

const Layout = ({ children }) => {
    const loading = useRef();
    useEffect(() => {
        loading.current.style.display = 'none';
    }, []);

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ПИРАТСКАЯ ГАЛЕРА | Главная</title>
                <link rel="icon" type="image/x-icon" href={logo}></link>
            </Helmet>
            <div ref={loading} className="overflow_box">
                <div className="loader">
                    <img src={logo} />
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div id='header-content' className="container-fluid">
                    <a className="navbar-brand" href="/">
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