import React from 'react';
import logo from "./react-logo.png"

export default function Header() {
  return (
    <div>
        <header>
        <nav className='nav-items'>
          <span className='logo-sec'>
            <img src={logo} alt='reactlogo' />
            <p>ReactFact</p>
          </span>
         
            <ul className='nav'>
              <li>Pricing</li>
              <li>About</li>
              <li>contact</li>
            </ul>
          
          </nav>
        
      </header>
    </div>
  )
}