import React from 'react'

const Nav = () => {
  return (
    <nav>
      <div className='flex justify-between p-4 max-w-screen-lg mx-auto'>
        <div><h1 className='font-upright'>Restaurant L'Atelier</h1></div>
        <ul className='flex gap-2'>
          <li>Forside</li>
          <li>Menu</li>
          <li>Kontakt</li>
        </ul>
        <div>Bestil Bord</div>
        {/* BURGER */}
        {/* MOBILE NAV */}
      </div>
    </nav>
  )
}

export default Nav