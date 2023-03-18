import React, { useEffect, useState } from 'react'
import logo from "../logo.png"
import { Link } from 'react-router-dom';

//REACT FONTAWESOME4
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Portfolio from './Project';




export const Navbar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <Link to="/" class="navbar-brand"><img className="logo" src={logo} alt="logo.." /></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/myPortfolio">Home </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About me </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/portfolio" element={<Portfolio />}>Project </Link>      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/contact">Contact </Link>      </li>
    </ul>
  </div>
</nav>      
    </div>
    
  )
}

export default Navbar
