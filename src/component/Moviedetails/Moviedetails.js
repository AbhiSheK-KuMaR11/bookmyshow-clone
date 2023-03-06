import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import "./Moviedetails.css";

function Moviedetails() {

    const [sortmovie, setSortmovies] = useState({})
    const{id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        function moviepage(){
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b5aecf5d45727a9ed920cc7f2b507548&language=en-US&page=1`)
             .then(responce => responce.json())
             .then(data =>  setSortmovies(data))
        }
        moviepage()
    },[])
    const bookticket = ()=>{
        navigate("/bookticket")
    }
    const home = () => {
        navigate("/Home")
    }
    console.log(id)
    console.log(sortmovie)
  return (
    <div>
      {
        <div className='disdetails'>
            <div>
             <img src= {` https://image.tmdb.org/t/p/original${sortmovie?.poster_path} `}alt ={"img"}  className = "np-img"/>
             </div>
            <div className='popups'>
                <h1>{sortmovie.title}</h1>
                <h3><i className="fa-solid fa-star"></i> {Math.round(sortmovie.vote_average)}/10</h3>
                <h3>{sortmovie.original_language}</h3>
                <span><h3>{sortmovie.runtime} minutes</h3></span>
                {/* <span>{sortmovie.genres[0].name}</span> */}
                <h3>{sortmovie.overview}</h3>
                <h3><i class="fas fa-rupee-sign">.</i>{sortmovie.runtime*2}</h3>
                
                {/* <button id='wishlist-btn'>Wishlist</button> */}
                <button id='back-btn' onClick={home}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button id='ticket-btn' onClick={bookticket}>Book Tickest</button>
             </div>
             
        </div>
      }
    </div>
  )
}

export default Moviedetails;
