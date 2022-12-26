import React, { useState } from 'react'
import "./Form.css";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
// import SubjectIcon from '@mui/icons-material/Subject';
import ForumIcon from '@mui/icons-material/Forum';
import { SiNamecheap } from 'react-icons/si';

function Form() {
    const [userData, setUserData] = useState({
        fname:"",
        email:"",
        message:"",
    });
    let name, value;
    const postUserData =(event)=>{
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]:value});
    };
    const submitData = async(event) =>{
        event.preventDefault();
        const {fname, email, message} = userData;

        const res = await fetch(
            'https://portfolio-6d88e-default-rtdb.firebaseio.com/userDataRecords.json',
            {
            method : "POST",
            headers:{
                "Content-Type" : "application/json",

            },
            body: JSON.stringify({
                fname, 
                email, 
                message
            }),
        }
            );
        if(res){
            alert("Message strored, you will be answered shortly.");
        } else{
            alert("Please fill the data");
        }

    }
  return (
    <div className='form py-5'>
        <form method='post'>
            <label><SiNamecheap/>
            Your Name</label>
            <input 
            type="text" 
            id=""  
            name = "fname"
            value = {userData.fname} 
            onChange={postUserData} 
           
            />
            <label><EmailIcon/>E-mail</label>
            <input
             type="email" 
             id=""  
             name = "email"
             value={userData.email}
             onChange={postUserData}
             />
            {/* <label><SubjectIcon/> Subject</label>
            <input type="text" required ="true"/> */}
            <label>
             <ForumIcon/> Message
             </label>
            <textarea 
            rows="6" 
            placeholder='Type your Message Here' 
            
            id = ""
            name = "message"
            value={userData.message}
            onChange={postUserData}
            />

            <button 
            type="submit" 
            className='btn'
            onClick={submitData}
            >
             Send
            <SendIcon/>
            </button>
        </form>
    </div>
  )
}

export default Form