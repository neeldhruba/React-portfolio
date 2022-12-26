import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Heroimg3 from '../components/Heroimg3'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Heroimg3 heading= "Want to contact with me?" text ="Go below and fill up the form..."/>
      <div id = "form" className='homw-top'>
      <Form/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact