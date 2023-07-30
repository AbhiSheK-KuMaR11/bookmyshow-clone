import React, { useContext, useState } from 'react'
import "./Header.css";
import { contextprovider } from './Context/Context';
import { NavLink, useNavigate } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap'

 function Header() {
   

    const [serchfild, setSerchfild] = useState("")

    const {data, setData} = useContext(contextprovider);
    console.log(data);
    

    const hendlesrch = () =>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b5aecf5d45727a9ed920cc7f2b507548&query=${serchfild}&language=en-US&page=1&include_adult=false`)
        .then(res=>res.json())
        .then(res=>setData(prev=>res.results))
    }
    const loggedinemail = window.sessionStorage.getItem("loggedin")
    let user = loggedinemail ? JSON.parse(localStorage.getItem(loggedinemail)) : "not present"
    console.log(user)
      
    const navigate = useNavigate()
    function logout(){
      window.sessionStorage.clear();
        navigate("/")
    }

  return (
    <>
    <div className='navbar'>
        <div>
            <NavLink to= "/Home"><img className='img-icon' src='https://entrackr.com/storage/2017/08/bookmyshow.jpg' alt='img' /></NavLink>
        </div>
        <div className='rightpart'>
         <div className='input1'>
         <input value={serchfild} id='input-hed' placeholder='Search' onChange={(e) => setSerchfild(e.target.value)} />
         <button id='btn' onClick={hendlesrch}>Search</button>
         </div>
        <span>
        <i className="fa-regular fa-heart"></i>
        </span>
        
         {/* <i className="fa-solid fa-user"></i> */}
         <NavDropdown className='nameuser' title = {user && user.Name}>
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
         </NavDropdown>
         
         
        </div>
           
      
    </div>
    </>
  )
}
export default Header;