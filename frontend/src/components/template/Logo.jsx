import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/imgs/logo.svg'
import './Logo.css'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="Logo"/>
        </Link>

    </aside>

    