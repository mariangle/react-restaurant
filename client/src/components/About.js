import React from 'react'
import img from "../assets/img/laurels.png"
import p1 from "../assets/img/01.png"
import p2 from "../assets/img/02.png"
import p3 from "../assets/img/03.png"
import spoon from "../assets/img/spoon.svg"

function About() {
  return (
    <div className='about'>
      <div className="about-container container">
        <div className="about-content">
          <div className="about-about">
              <div className="header-span">
                <p>Priser og anderkendelse</p>
                <img src={spoon} alt="" />
              </div>
              <h2>Priser</h2>
              <div className="award-container">
                <img src={p1} alt="" />
                <div className="award-content">
                  <h5>Bedste Fine Dining Restaurant</h5>
                  <p>Vinder af "Bedste Fine Dining Restaurant" på Danish Restaurant Awards 2022.</p>
                </div>
              </div>
              <div className="award-container">
                <img src={p2} alt="" />
                <div className="award-content">
                  <h5>Michelin Guide Plate</h5>
                  <p>Tildelt "Michelin Guide Plate" for vores fremragende mad og service.</p>
                </div>
              </div>
              <div className="award-container">
                <img src={p3} alt="" />
                <div className="award-content">
                  <h5>Årets Restaurant</h5>
                  <p>Modtager af "Årets Restaurant" på AOK's Spiseguide for vores unikke og udsøgte smagsoplevelser.</p>
                </div>
              </div>
          </div>
          <div className="about-img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About