import React from 'react'
import  "./confirm.css";
import Header from '../Header/Header';
// import { useNavigate } from 'react-router-dom';

function Confirm() {


    // const navigate = useNavigate()

    // const homer = () => {
    //     navigate("/Home")
    // }




  return (
    <>
    <Header />
    {/* <button id='bt-home' onClick={homer}>Home</button> */}
    <div className='thank'>
        
      <h2>ThankYou !!!</h2>
    </div>
    </>
  )
}

export default Confirm;
