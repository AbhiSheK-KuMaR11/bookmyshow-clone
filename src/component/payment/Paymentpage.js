import React from 'react'
import card_img from './card_img.png';
import './Paymentpage.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function Paymentpage() {

   const navigate = useNavigate()

  const confirmpay = () => {
      navigate("/Confirmpage")
  }

  return (
    <>
    <Header />
    <div className='container5'>
      
        <form>
        <div className='row12'>
          <div className='colz'>
          <h3 className='titlez'>billing address</h3>
            <div>
              <label htmlFor='name' id='yap'>full name :</label>
            <input type='text' className='inputBox' placeholder='Abhishek'/>
            </div>
            <div>
              <label htmlFor='email' id='yap'>email :</label>
            <input type='email' className='inputBox' placeholder='example@example.com' required/>
            </div>
            <div>
              <label htmlFor='address' id='yap' >address :</label>
            <input type='text' className='inputBox' placeholder='address-street-locality'/>
            </div>
           <div>
             <label htmlFor='city' id='yap' >city :</label>
            <input type='text' className='inputBox' placeholder='mumbai'/>
            </div>
            <div>
              <label htmlFor='state' id='yap' >state :</label>
            <input type='text' className='inputBox' placeholder='india'/>
            </div>
            <div>
              <label htmlFor='zip-code' id='yap' >zip-code :</label>
            <input type='text' className='inputBox' placeholder='112233'/>
            </div>


          <div className='colz'>
            <h3 className='titlez'>payment</h3>
            <div>
              <label htmlFor='cards accpted' id='yap' >cards accepted :</label>
            <img src= {card_img} alt='img'/>
            </div>
            <div>
              <label htmlFor='name' id='yap' >name on card :</label>
            <input type='text' className='inputBox' placeholder='Abhishek'/>
            </div>
           
            <div>
              <label htmlFor='card number' id='yap' >card number :</label>
            <input type='number' className='inputBox' placeholder='1111-2222-3333-4444'/>
            </div>
           <div>
             <label htmlFor='exp month' id='yap' >exp month :</label>
            <input type='text' className='inputBox' placeholder='march'/>
            </div>
            <div>
              <label htmlFor='exp year' id='yap' >exp year:</label>
            <input type='number' className='inputBox' placeholder='2029'/>
            </div>
            <div>
              <label htmlFor='CVV' id='yap' >CVV :</label>
            <input type='text' className='inputBox' placeholder='1234'/>
            </div>
          </div>
            <button onClick={confirmpay} className='submitt-btnn' >Pay</button>
            </div>
            </div>
        </form>
        
      
    </div>
    </>
  )
}

export default Paymentpage
