import React from 'react'
import welcome from "../assets/img/welcome.png"
import spoon from "../assets/img/spoon.svg"

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-container">
        <div className="hero-about">
            <div className="header-span">
              <p>Gastronomisk forkælelse</p>
              <img src={spoon} alt="" />
            </div>
            <h1>FORKÆL DINE SMAGSLØG</h1>
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