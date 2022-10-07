import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/pizzaLogo.png"
import ReorderIcon from "@mui/icons-material/Reorder"

import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img className='logo' src={Logo} alt="" />
      </div>
      <div className="navbar-right">
        <Link to="/">Kezdőoldal</Link>
        <Link to="/menu">Menü</Link>
        <Link to="/about">Rólunk</Link>
        <Link to="/contact">Kapcsolat</Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar