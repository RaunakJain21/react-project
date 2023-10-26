import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Form from './Form';
 
const Home = () => {
   
  const navigate=useNavigate();
    const [roomID,setRoomId]=useState();
    const clickfun = () =>{
        navigate(`/room/${roomID}`);
    }

  return (
    <div className='app '>
        <input placeholder='Enter room id' className='inp' value={roomID} onchange={(e)=>setRoomId(e.target.value)}></input>
        <button className='btn' onClick={clickfun}>Join</button>
{/* <Form/> */}

    </div>
  )
}

export default Home