import React from 'react'
import signature from "../assets/img/signature.png"


function Welcome() {
  return (
    <>
      <div className='welcome'>
          <div className="welcome-container">
              <div className="welcome-header">
                  <h2>Velkommen til Restaurant L'Atelier</h2>
              </div>
              <p>Hos restaurant L'Atelier er vores passion for madlavning grundlaget for vores restaurant. Vi tror på, at mad skal være mere end bare brændstof for kroppen - det skal være en oplevelse, der pirrer dine sanser og giver dig en følelse af tilfredsstillelse. Vi sætter en ære i at finde de bedste ingredienser og kombinere dem på en måde, der skaber en udsøgt smagsoplevelse.</p>

              <br/><p>Mange hilsner</p>
              <img src={signature} alt="signature" />
          </div>
      </div>
      <div className="section-divider"></div>
    </>
  )
}

export default Welcome