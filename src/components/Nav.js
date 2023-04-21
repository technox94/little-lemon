import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';


function Nav() {
    return (
      <nav className='navbar'>
        <Link to="/">
          <img src={Logo} alt="Little Lemon Logo" className='Logo' />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    );
  }

export default Nav;