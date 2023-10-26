import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
    const navigate=useNavigate();
    const [roomID,setRoomId]=useState();
    const clickfun = () =>{
        navigate(`/room/${roomID}`);
    }
    
  return (
    <div style={style}>
        <input class="c-checkbox" type="checkbox" id="checkbox" />
<div class="c-formContainer">
  <form class="c-form" action="">
    <input class="c-form__input" placeholder='Enter room id' value={roomID} onchange={(e)=>setRoomId(e.target.value)} type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required />
    <label class="c-form__buttonLabel" for="checkbox">
      <button class="c-form__button" onClick={clickfun} type="button">Send</button>
    </label>
    <label class="c-form__toggle" for="checkbox" data-title="Notify me"></label>
  </form>
</div>
</div>
  )
}

export default Form