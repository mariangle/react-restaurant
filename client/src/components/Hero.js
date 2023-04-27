import React from 'react'
import welcome from "../assets/img/welcome.png"

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-container container">
        <div className="hero-about">
            <h2>FORKÆL DINE SMAGSLØG</h2>
            <p>Oplev eksklusiv gastronomi på sit højeste i hjertet af København. Lad vores restaurant forføre dine smagsløg med de fineste ingredienser og enestående kreativitet.</p>
        </div>
        <div className="hero-img">
          <img src={welcome} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero