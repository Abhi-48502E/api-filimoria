import React from 'react'
import './navbar.css'
import logo from '../assets/1.crdownload'
import bg from '../assets/bg.jpg'


function Navbar() {
  return (


    <div className='nav-top'>
    <img src={logo} alt="ss" className='gif-logo' />
<h1 className='logo-txt'>FILIMAHOLIC</h1>
    <div className='second-nav'>

      <nav class="navbar">
        <div id="trapezoid">
          <a class="expandHome" href="#">Home</a>
          <a href="#About" class="expandHome">About</a>
          <a href="#About" class="expandHome">Contact</a>
          <a href="#About" class="expandHome">Top-movies</a>
        </div>
      </nav>

      </div>
    </div>


  )
}

export default Navbar