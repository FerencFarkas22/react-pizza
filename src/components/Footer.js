import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import "../styles/Footer.css"
  const Footer = () => {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <a target="_blank" href="https://www.instagram.com/ferencfarkas_/"><Instagram/></a>
        
        <Twitter/>
        <Facebook />
        <LinkedIn />
      </div>
      <p>2022 &copy; Saját project</p>
    </div>
  )
}

export default Footer
