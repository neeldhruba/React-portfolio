import React from 'react'
import { FaHome, FaPhone,FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa';


import "./Footer.css";
import {useNavigate } from 'react-router-dom';

function Footer() {
  const git = ()=>{
    window.open("https://github.com/neeldhruba",'_blank');
  }
  const lin = ()=>{
    window.open("https://www.linkedin.com/in/neeldhruba-dasgupta-4a92521ba/",'_blank');
  }
  const Navigate = useNavigate();
  const home =()=>{
    Navigate("/");
  }
  const about =()=>{
    Navigate("/about");
  }
  const project =()=>{
    Navigate("/project");
  }
  const contact =()=>{
    Navigate("/contact");
  }
  return (
    <div className='footer'>
      <div className='footer-contain'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
              <p>B.B.D Bag Sarani, Ghoshpara,Bally,Howrah</p>
              <p>Kolkata, WestBengal</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              7890742377
            </h4>
          </div>
          <div className='email'>
           <p> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            neeldhrubadasgupta08@gmail.com</p>
          </div>
        </div>
        <div className='right'>
          
          <h4>Importent Links</h4>
          <hr/>
          <p style={{cursor:'pointer'}} onClick={home}>Home</p>
          <p style={{cursor:'pointer'}} onClick={about}>About</p>
          <p style={{cursor:'pointer'}} onClick={project}>Project</p>
          <p style={{cursor:'pointer'}} onClick={contact}>Contact</p>
           
          
          <div className='social'>
            <FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem",cursor:'pointer'}} onClick={lin}/>
            <FaGithub size={20} style={{color:"#fff", marginRight:"2rem",cursor:'pointer'}} onClick={git}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer