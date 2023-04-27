import React from 'react'

function Header() {

  return (
    <nav>
        <div className='nav-header'>
            <div id="logo">Restaurant L'Atelier</div>
            <ul className='nav-links'>
                <li>Forside</li>
                <li>Menukort</li>
                <li>Om os</li>
                <li>Kontakt</li>
            </ul>
            <div className="nav-burger f-1">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </nav>
  )
}

export default Header