import React from 'react'
import "./Heroimg.css";
import intro from "../assests/intro-bg.jpg"
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';

function Heroimg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={intro} alt='intro'/>
      </div>
      <div className='content'>
      <Bounce bottom cascade>
        <p>Hi, I'm Neeldhruba.</p>
        <h1>Welcome to my portfolio.</h1>
        </Bounce>
        <div>
          <Link to='/project' className='btn'>
            Projects
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg