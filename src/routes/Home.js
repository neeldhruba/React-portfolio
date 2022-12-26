import React from 'react'
import Footer from '../components/Footer'
import Heroimg from '../components/Heroimg'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'

function Home() {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <WorkCard />
      <Footer/>
    </div>
  )
}

export default Home