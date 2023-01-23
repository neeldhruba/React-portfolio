import React, { useState } from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import {BiHome} from "react-icons/bi"
import {FaPhone} from "react-icons/fa"
import {AiFillProject} from "react-icons/ai"
import InfoIcon from '@mui/icons-material/Info';
import Port from './Port';
// import Rotate from 'react-reveal/Rotate';

// import { Avatar } from '@mui/material';


function Navbar() {
  const [click,setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  }
  const [color,setColor] = useState(false);
  const changeColor =()=>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener("scroll" , changeColor)


  return (
    <div className={color ? "header header-bg" : "header"}>
      {/* <Link to="/"> */}
        {/* <h1>Portfolio.</h1> */}
        <Port/>
        {/* <Avatar src={neel} className="avatar"/> */}
      {/* </Link> */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">
            <BiHome className='optionIcon'/>
            Home
          </Link>
        </li>
        <li>
          <Link to="/project">
          <AiFillProject className='optionIcon'/>
            Project
          </Link>
        </li>
        <li>
          <Link to="/about">
          <InfoIcon className='optionIcon'/>

            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
          <FaPhone className='optionIcon'/>
            Contact
          </Link>
        </li>
        {/* size={20} style={{color:"#fff", marginRight:"2rem"}} */}

      </ul>
      <div className='hamburger' onClick={handleClick}>
        
      {click ? (
        <FaTimes 
        size={20} 
        style={{color:"#fff"}}
        />
        ) :(
          <FaBars 
          size={20} 
          style={{color:"#fff"}}
          />
      ) }
        
      </div>
    </div>
  )
}

export default Navbar