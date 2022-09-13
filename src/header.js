import React from 'react';

export default function Header() {
  return (
    <div>
        <header>
          <nav>
          <img src={logo} width="50px" alt='reactlogo' />
            <ul>
              <li>Pricing</li>
              <li>About</li>
              <li>contact</li>
            </ul>
          </nav>
        
      </header>
    </div>
  )
}