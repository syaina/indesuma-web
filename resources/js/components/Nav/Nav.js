import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav>
            <a className="social-media-container" href="https://twitter.com/indesuma">
                <img src="/images/twitter.png" alt="twitter" />
                <span>indesuma</span>
            </a>
            <a className="social-media-container" href="https://instagram.com/indesuma.id">
                <img src="/images/instagram.png" alt="instagram" />
                <span>indesuma.id</span>
            </a>
            <a className="social-media-container" href="https://youtube.com">
                <img src="/images/youtube.png" alt="youtube" />
                <span>Indesuma</span>
            </a>
            <a className="social-media-container" href="#">
                <img src="/images/email.png" alt="email" />
                <span>email@indesuma.id</span>
            </a>
        </nav>
    )
}