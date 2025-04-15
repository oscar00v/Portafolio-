import React from 'react'
import '../components/Navbar.scss'; // Import your CSS file for styling
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav class="navbar">

        <ul class="navbar-list">

          <li class="navbar-item">
            {/* <button class="navbar-link  active" data-nav-link>About</button> */}
            <NavLink to="/" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          </li>

          <li class="navbar-item">
            {/* <button class="navbar-link" data-nav-link>Resume</button> */}
            <NavLink to="/resume" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Resume
          </NavLink>
          </li>

          <li class="navbar-item">
            {/* <button class="navbar-link" data-nav-link>Portfolio</button> */}
            <NavLink to="/portfolio" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
            Portfolio
          </NavLink>
          </li>

          {/* <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Blog</button>
          </li> */}

          <li class="navbar-item">
            {/* <button class="navbar-link" data-nav-link>Contact</button> */}
            <NavLink to="/contact" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
             Contact
          </NavLink>
          </li>

        </ul>

      </nav>
  )
}

export default Navbar
