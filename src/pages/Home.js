import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/pizza.jpeg';
import "../styles/Home.css"
import {motion} from "framer-motion"
const Home = () => {
  return (
    <motion.div
    className='home'
    
     initial={{opacity:0}} 
     animate={{opacity: 1,transition:{duration: 2}} }
     
     >
      <div className="homeContainer">
        <h1>DonCorleone Pizzéria</h1>
        <p>Monor és környéke legjobb pizzái</p>
        <Link to="/menu">
        <motion.button
          initial={{scale:0}} 
         animate={{scale:1, transition:{delay:2}}}
        >Rendelés leadása</motion.button>
        </Link>
      </div>



    <div className="mobileView">
      <div className="mobile-top">
      <h1>Üzvözlünk a DonCorleone Pizzéria oldalán</h1>
      <p>Kérjük válasszon alábbi menüpontjaink közül</p>
      </div>
    <div className="mobile-Bottom">
      
   <div className="links"><Link to="/menu">Menü/Rendelés</Link></div>
   <div className="links"><Link to="/about">Rólunk</Link></div>
   <div className="links"><Link to="/contact">Kapcsolat</Link></div>

        
       
    </div>

    </div>
    </motion.div>
  )
}

export default Home