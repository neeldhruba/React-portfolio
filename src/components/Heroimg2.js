import React, { Component } from 'react'
import "./Heroimg2.css";
import code from "../assests/code.jpg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
class Heroimg2 extends Component {
  render() {
    return(
    <div className='hero-img'>
      <div className='mask'>
        <img className='intro-img' src={code} alt='intro'/>
      </div>
      <div className='content'>
        <Fade right big cascade>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
        </Fade>
      </div>
      <Bounce left>
       <a href='#project'><ArrowDownwardIcon className='arrdown'/> </a>
      </Bounce>
    </div>
    
    )
  }
}

export default Heroimg2