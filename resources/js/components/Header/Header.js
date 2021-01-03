import React, { useState } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default function Header () {
    const [isActive, setActive] = useState(false)
    
    function openMobileMenu () {
        isActive ? setActive(false) : setActive(true)
    }

    console.log(isActive)

    return (
        <header>
            <Router>
                <div className="logo-container">
                    <img src="/images/logo.png" alt="Indesuma" />
                </div>
                <div className={(isActive ? "mobile-menu-active" : "mobile-menu-inactive" ) + " header-link mobile-menu"} >
                    <a href="/product">Produk</a>
                    <Link to="">Tentang Kami</Link>
                    <Link to="">Hubungi Kami</Link>
                    <Link to="">Galeri</Link>
                </div>
                <div className="header-link web-menu">
                    <a href="/product">Produk</a>
                    <Link to="">Tentang Kami</Link>
                    <Link to="">Hubungi Kami</Link>
                    <Link to="">Galeri</Link>
                </div>
                <button className="mobile-menu-toggle" onClick={() => openMobileMenu()}>Menu</button>
            </Router>
        </header>
    )
}