import React from 'react'

 function Progressbar (props){
  
 const {bgcolor,text,completed} = props;
 const containerStyles = {
  height: 37,
  width: '70%',
  backgroundColor: "#faac63",
  // borderRadius: 35,
  margin: 50,
  justifycontent:'center',
  alignitem:'center'
  
}

const fillerStyles = {
  height: 37,
  width: `${completed}%`,
  backgroundColor: bgcolor,
  borderRadius: 'inherit',
  textAlign: 'center',
  animation: 'progress 0.4s ease-in-out forward'
}

const labelStyles = {
  padding: 5,
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  textalign: 'center',
} 


 return (
  <div style={containerStyles}>
  <div style={fillerStyles}>
    <span style={labelStyles}>{`${text}`}</span>
  </div>
</div>
        
      );
    
   
  
 }


export default Progressbar