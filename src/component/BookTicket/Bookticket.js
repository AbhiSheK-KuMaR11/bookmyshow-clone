import React, { useState } from 'react'
import "./Bookticket.css";
import { Navigate, useNavigate } from 'react-router-dom';


// const totalseat = new Array(80)
// for(let i =1; i <= totalseat.length; i++){
//     let data = {
//         seatno: i,
//         occupied: false,
//         selected:false
//     }
//     totalseat[i] = data;
// }

function Bookticket() {

    const navigate = useNavigate()

    // const [seatdata, setSeatdata] = useState(totalseat);
    // console.log(seatdata);

    // const handleseat = (e) =>{
    //     let seatno = e.target.value
    //     let newseatdata = seatdata.map((nsd) => {
    //         if(nsd.seatno === seatno){
    //             nsd.selected =true
    //         }
    //         return nsd;

    //     })
    //     setSeatdata(prev => handleseat)

    // }
    const home = () => {
        navigate("/Home")
    }
    
  return (
    <>
   
    <div className='container-tkt'>
    <button className='backarrow' onClick={home}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
        <h2>Book Tickets</h2>
        <div>
            <ul className='showcase'>
                <li>
                    <div className='seat'></div>
                    <small>N/A</small>

                </li>

                <li>
                <div className='seat selected'></div>
                <small>Selected</small> 
                </li>

                <li>
                <div className='seat occupied'></div>
                <small>Occupied</small> 
                </li>
                
            </ul>
        </div>
            <div className='container-seat'>
                <div className='screen'></div>
                <div className='row'>
                    {/* {seatdata.map((sd) => { 
                         return (
                         <div className={sd.selected ? "occupied" : "seat"} value={sd.seatno} onClick={(e) =>handleseat(e)}>{sd.seatno}</div> 
                        )
                     })}  */}
                    
                    <div className='seat'>01</div> 
                    <div className='seat'>02</div>
                    <div className='seat occupied'>03</div>
                    <div className='seat occupied'>04</div>
                    <div className='seat occupied'>05</div>
                    <div className='seat'>06</div>
                    <div className='seat'>07</div>
                    <div className='seat'>08</div> 
                </div>

                <div className='row'>
                    <div className='seat'>09</div>
                    <div className='seat'>10</div>
                    <div className='seat'>11</div>
                    <div className='seat occupied'>12</div>
                    <div className='seat occupied'>13</div>
                    <div className='seat'>14</div>
                    <div className='seat'>15</div>
                    <div className='seat'>16</div>
                </div>

                <div className='row'>
                    <div className='seat occupied'>17</div>
                    <div className='seat'>18</div>
                    <div className='seat'>19</div>
                    <div className='seat'>20</div>
                    <div className='seat'>21</div>
                    <div className='seat'>22</div>
                    <div className='seat'>23</div>
                    <div className='seat'>24</div>
                </div>

                <div className='row'>
                    <div className='seat'>25</div>
                    <div className='seat'>26</div>
                    <div className='seat'>27</div>
                    <div className='seat occupied'>28</div>
                    <div className='seat occupied'>29</div>
                    <div className='seat'>30</div>
                    <div className='seat'>31</div>
                    <div className='seat'>32</div>
                </div>

                 <div className='row'>
                    <div className='seat'>33</div>
                    <div className='seat'>34</div>
                    <div className='seat'>35</div>
                    <div className='seat occupied'>36</div>
                    <div className='seat'>37</div>
                    <div className='seat'>38</div>
                    <div className='seat'>39</div>
                    <div className='seat'>40</div>
                </div>

                <div className='row'>
                    <div className='seat'>41</div>
                    <div className='seat'>42</div>
                    <div className='seat'>43</div>
                    <div className='seat occupied'>44</div>
                    <div className='seat occupied'>45</div>
                    <div className='seat'>46</div>
                    <div className='seat'>47</div>
                    <div className='seat'>48</div>
                </div> 

                 <div className='row'>
                    <div className='seat'>49</div>
                    <div className='seat'>50</div>
                    <div className='seat'>51</div>
                    <div className='seat occupied'>52</div>
                    <div className='seat occupied'>53</div>
                    <div className='seat'>54</div>
                    <div className='seat'>55</div>
                    <div className='seat'>56</div>
                </div>
                
                <div className='row'>
                    <div className='seat'>57</div>
                    <div className='seat occupied'>58</div>
                    <div className='seat occupied'>59</div>
                    <div className='seat'>60</div>
                    <div className='seat'>61</div>
                    <div className='seat occupied'>62</div>
                    <div className='seat'>63</div>
                    <div className='seat'>64</div>
                </div> 
            </div>
            <p className='finishtext'>
                you have selected<span id='countnum'>0</span> seats for a price of Rs.<span id='totalamount'>0</span>
            </p>
      
    </div>
    </>
  )
}

export default Bookticket;
