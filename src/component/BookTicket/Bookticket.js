import React, { useState } from 'react'
import "./Bookticket.css";
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';

let totalSeat = new Array(8);
for(let i = 0; i < totalSeat.length; i++){
    let newarr = [];
    for(let j = 0; j < 10; j++){
      newarr[j] = false
    }
    totalSeat[i] = newarr;
}
console.log(totalSeat);

function Bookticket() {

    const navigate = useNavigate()
    const {price} = useParams();
    console.log('price is',price)
    const [ticketCount,setTicketCount] = useState(0);
    const[modal,setModal] = useState(false);
    const [seat,setSeat] = useState(totalSeat);
     console.log("seat is ",seat)
    const home = () => {
        navigate("/Home")
    }
    const pay = ()=>{
        navigate("/Payment")
    }
    const handleSeat = (outer,inner)=>{
        // console.log("index is ",index);
        // const newSeat = [...seat];
        // newSeat[outer][inner] = true;
        // setSeat(prev => newSeat);
        let currseat = seat[outer][inner];
        if(currseat == false){
            const newSeat = [...seat];
            newSeat[outer][inner] = true;
            setSeat(prev => newSeat);
            setTicketCount(prev => prev + 1)
        }
        
    }
    const toggleModal = ()=> {
        setModal(!modal)
    }
  return (
    <>
      <Header />
    <div className='container-tkt'>
    <button className='backarrow' onClick={home}><i className="fa fa-arrow-left"></i></button>
        <h2>Book Tickets</h2>
        <div>
            <ul className='showcase'>
                <li>
                    <div className='seat'></div>
                    <small>Available</small>

                </li>

                <li>
                <div className='seat selected'></div>
                <small>Selected</small> 
                </li>

                {/* <li>
                <div className='seat occupied'></div>
                <small>Occupied</small> 
                </li> */}
                
            </ul>
        </div>
            <div className='container-seat'>
                <div className='screen'></div>
                  {seat.map((value,i)=>{
                    return(
                        <div className='row'>
                            {value.map((innerseat,j)=>{
                                return(
                                    <div 
                                      onClick={()=>handleSeat(i,j)}
                                    className={innerseat ? "border rounded bg-danger col" : "col border bg-primary rounded"}
                                    >{ 10 *parseInt(i ) + parseInt(j+1)}</div>
                                )
                            })}
                        </div>
                    )
                  })}

            </div>
            <p className='finishtext'>
                you have selected <span id='countnum'>{ticketCount}</span> seats for a price of Rs.<span id='totalamount'>{price * 2*ticketCount}</span>
            </p> 
            <button id='conform-tkt' onClick={toggleModal} >Confirm Ticket</button>
             {modal && (
                <div className='modal11'>
                <div onClick={toggleModal} className='overlay'></div>
                <div className='modal-content'>
                    <h2>Details</h2>
                <p className='finishtext'>
                you have selected <span id='countnum11'>{ticketCount}</span> seats
                 for total price of Rs.<span id='totalamount11'>{price * 2*ticketCount}</span>
            </p> 
            <button id='conform-tkt-book' onClick={pay} >Checkout</button>

                </div>
            </div>

             )}
            
      
    </div>
    </>
  )
}

export default Bookticket;
