import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav>
        <div className='nav-header'>
            <div id="logo"><Link to="/">Restaurant L'Atelier</Link></div>
            <ul className={`nav-links ${isToggled ? 'active' : ''}`}>
                <li>
                  <Link to="/">Forside</Link>
                  <motion.div className='line'
                    transition={{ duration: 0.4 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/" ? "100%" : "0%" }}
                  />
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                  <motion.div className='line'
                    transition={{ duration: 0.4 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/menu" ? "100%" : "0%" }}
                  />
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                  <motion.div className='line'
                    transition={{ duration: 0.4 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/kontakt" ? "100%" : "0%" }}
                  />  
                </li>
                |
                <li>
                  <Link to="/book">Book Bord</Link>
                  <motion.div className='line'
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/book" ? "100%" : "0%" }}
                  />  
                </li>
            </ul>
            <div className="nav-burger f-1" onClick={() => setIsToggled(!isToggled)}>
              <motion.div className="line1" 
                transition={{ duration: 0 }}
                animate={{ 
                  rotate: isToggled ? 45 : 0,
                  translateY: isToggled ? "150%" : 0 
                }}
              ></motion.div>                
              <motion.div className="line2" 
                transition={{ duration: 0 }}
                animate={{ 
                  display: isToggled ? "none" : "block",
                }}
              ></motion.div>               
              <motion.div className="line3" 
                transition={{ duration: 0 }}
                animate={{ 
                  rotate: isToggled ? -45 : 0,
                  translateY: isToggled ? "-150%" : 0 
                }} 
              ></motion.div> 
            </div>
        </div>
    </nav>
  )
}



export default Header