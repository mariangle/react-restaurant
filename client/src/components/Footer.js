import React from 'react'
import spoon from "../assets/img/spoon.svg"
import facebook from "../assets/img/facebook.svg"
import instagram from "../assets/img/instagram.svg"
import twitter from "../assets/img/twitter.svg"

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-section">
          <h4>Kontakt</h4>
          <ul>
            <li>Vesterbro 10</li>
            <li>København K 1000</li>
            <br />
            <li><span>Telefon:</span>: +45 50 10 50 70</li>
            <li><span>Email:</span> restaurant@email.dk</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Restaurant L'Atelier</h3>
          <img src={spoon} alt="spoon" />
          <div className="footer-socials">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="footer-section">
          <h4>Åbningstider</h4>
          <ul>
            <li>Mandag - Fredag: 16:00 - 20:00</li>
            <li>Lørdag - Søndag : 12:00 - 22:00</li>
          </ul>
        </div>
      <h4></h4>
      </div>
    </footer>
  )
}

export default Footer