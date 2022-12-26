// import { Avatar } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
// import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'
import Skill from '../components/Skill'
import neeldhruba from "../assests/neeldhruba.jpeg";
import "./About.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Fade from 'react-reveal/Fade';
function About() {
  return (
    <div >
      <Navbar/>
      
      <div className='about'> 
          
       <div className='about_left'>
          {/* <img src={neel} alt="profile pic"/> */}
          <LazyLoadImage src={neeldhruba}
        // width={600} height={400}
        alt="Image Alt"
      />
        </div>
        <div className='about_right'>
          {/* <Heroimg2 heading="ABOUT ME." text = "Hi, I am Neeldhruba DasGupta. Currently i have completed my Bachelor's of Technology from University of Engineering and Management, Kolkata specialized in Computer Science and Engineering.Along with my studies i have done project on Machine learning and MERN Framework.Now i am looking for a job to start my carrer, Thank you."/> */}
          <Fade left>
          <h2>ABOUT <span>ME.</span></h2>
          </Fade>
          <Fade right>
            <h4>Hi, I am Neeldhruba DasGupta. Currently i have completed my Bachelor's of Technology from University of Engineering and Management, Kolkata specialized in Computer Science and Engineering.Along with my studies i have done project on Machine learning and MERN Framework.Now i am looking for a job to start my carrer, Thank you.</h4>
          </Fade>
        </div>
       
      </div>
      <div className='home_top' id="project">
        <Skill/>
      </div>
      <Footer/>
    </div>
  )
}

export default About