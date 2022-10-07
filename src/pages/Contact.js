import React from 'react'
import contactBackground from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.div 
    className='contact'
    initial={{opacity:0}} 
     animate={{opacity: 1}}
    
    >
        <div className="contact-left" style={{ backgroundImage: `url(${contactBackground})` }}></div>
        <div className="contact-right">
          <h1>Kapcsolat</h1>
          <form action="" method='post'>
           
            <label htmlFor="">Teljes név</label>
            <input type="text" placeholder='Add meg a teljes neved' />
            
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Add meg a E-mail címed' />
            
            <label htmlFor="">Üzenet</label>
            <textarea rows="6" placeholder='Üzenet...' />

            <button>Üzenet küldése</button>
          </form>
        </div>
      
    </motion.div>
  )
}

export default Contact