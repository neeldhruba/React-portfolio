import React from 'react'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'

function Project() {
  return (
    <div>
      <Navbar/>
      
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works." />
      
      <div id = "project" className='homw-top'>
        <WorkCard />
      </div>
      <Footer/>
    </div>
  )
}

export default Project