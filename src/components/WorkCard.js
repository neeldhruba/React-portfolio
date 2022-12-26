import React from 'react';
import "./WorkCard.css";
import port from "../assests/port.png";
import work2 from "../assests/work2.png";
import credit from "../assests/Credit.png"
import bre from "../assests/bre.png"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import DocViewer,{DocViewerRenderers} from 'react-doc-viewer'

// import Modal from './Modal';
function WorkCard() {
  const [modal, setModal] = useState(false);
    const docs = [
        {
            uri: require("../assests/c.pdf")
        },
    ]
    const doc = [
      {
          uri: require("../assests/b.pdf")
      },
  ]
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    const kernel =()=>{
      window.open('https://kernelstar.vercel.app/','_blank');
    }
  return (
    <React.Fragment >
    
    <div className='project-card'>
      <img src={work2} alt="img"/>
        <h2 className='project-title'>Kernelstar-an Online Learning Platform</h2>
          <div className='pro-details'>
            <p>This is an online learning platform using MERN Stack.</p>
              <div className='pro-btns'>
               <button onClick={kernel} className="btn"> View</button>
               
              </div>
          </div>
    </div>
    <hr/>
    <div className='project-card'>
      <img src={port} alt="img"/>
        <h2 className='project-title'>Portfolio</h2>
          <div className='pro-details'>
            <p>This is a portfolio using ReactJs.</p>
              <div className='pro-btns'>
               <NavLink to="url.com" className="btn"> View</NavLink>
               
              </div>
          </div>
    </div>
    <hr/>
    <div className='project-card'>
      <img src={credit} alt="img"/>
        <h2 className='project-title'>Credit Card Fraud Detection using Machine Learning</h2>
          <div className='pro-details'>
            <p>Here Logistic Regression Model is Used to detect Fradulant Transaction from a given data set.</p>
              <div className='pro-btns'>
              {/* <Modal className="btn"/> */}
               {/* <NavLink to="https://kernelstar.vercel.app/" className="btn">Source</NavLink> */}
               <button onClick={toggleModal} className="btn">
                View
               </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            {/* <div className="modal-content"> */}
              <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} className="modal-content"/>
              
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            {/* </div> */}
          </div>
        )}
        
              </div>
          </div>
    </div>
    <hr/>
    <div className='project-card'>
      <img src={bre} alt="img"/>
        <h2 className='project-title'>Breast Cancer Classification using Machine Learning</h2>
          <div className='pro-details'>
            <p>Here Logistic Regression Model is Used to detect Cancereous Cells from a given data set.</p>
              <div className='pro-btns'>
              {/* <Modal className="btn"/> */}
               {/* <NavLink to="https://kernelstar.vercel.app/" className="btn">Source</NavLink> */}
               <button onClick={toggleModal} className="btn">
                View
               </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            {/* <div className="modal-content"> */}
              <DocViewer documents={doc} pluginRenderers={DocViewerRenderers} className="modal-content"/>
              
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            {/* </div> */}
          </div>
        )}
        
              </div>
          </div>
    </div>
    </React.Fragment>
  )
}

export default WorkCard