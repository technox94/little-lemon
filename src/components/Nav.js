import React from 'react';
import Logo from '../assets/Logo.svg';


export default function Nav() {
    return <nav className="navbar">
        <div className='Logo'><img src={Logo} alt='little lemon'/></div>
        <ul>
            <li>
                <a href='/Home'>Home</a>
            </li>
            <li>
                <a href='About'>About</a>
            </li>
            <li>
                <a href='Menu'>Menu</a>
            </li>
            <li>
                <a href='Reservation'>Reservation</a>
            </li>
            <li>
                <a href='Order Online'>Order Online</a>
            </li>
            <li>
                <a href='Login'>Login</a>
            </li>
        </ul>
    </nav>
}



