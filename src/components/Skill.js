import React from 'react'
import "./Skill.css"
import CodeIcon from '@mui/icons-material/Code';
import { FaDatabase, FaJava, FaPython, FaReact } from 'react-icons/fa';
// import {FcStatistics} from 'react-icons/fc';
import {CgWebsite} from 'react-icons/cg';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

//  import { useEffect } from 'react';
 import Progressbar from './Progressbar';
 import Zoom from 'react-reveal/Zoom';
 import RubberBand from 'react-reveal/RubberBand';
function Skill() {
 
  return (

    <div className="skill">
      <h1>Skills</h1>
      <div className="skill_body">
      <div className='skill_left'>
        <h4>Programming Language</h4>
        <Zoom>
        <ul >
          <li><CodeIcon/> C programming</li>
          <li><FaJava/> java</li>
          <li><FaPython/> Python</li>
          <li><FaReact/> React js.</li>
          <li><FaDatabase/> Sql</li>
        </ul>
        </Zoom>
        <h4>Frame Work</h4>
         <Zoom>
         <ul>
          <li><StackedLineChartIcon/> Machine Learning</li>
          <li><CgWebsite/> MERN Stack</li>
        </ul>
        </Zoom>
      </div>
      <div className='skill_right'>
        <h4>Laguage Proficiency</h4>
        <div className='skill_right_sub'>
          <RubberBand >
          <Progressbar text="English" bgcolor="rgb(6, 6, 169" completed="95"/>
          <Progressbar text="Hindi" bgcolor="rgb(6, 6, 169" completed="85"/>
          <Progressbar text="Bengali" bgcolor="rgb(6, 6, 169" completed="100"/>
          </RubberBand>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Skill