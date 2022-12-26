import React, { Component } from 'react'
import "./Heroimg3.css";
import contact from "../assests/contact.jpg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Fade from 'react-reveal/Fade';
class Heroimg3 extends Component {
  render() {
    return(
    <div className='hero-img'>
      <div className='mask'>
        <img className='intro-img' src={contact} alt='intro'/>
      </div>
      <div className='content'>
        <Fade right big cascade>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
        </Fade>
      </div>
      
       <a href='#form'><ArrowDownwardIcon className='arrdown'/> </a>
      
    </div>
    
    )
  }
}

export default Heroimg3