
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import Updatemovie from "./Updatemovie";
import { useState } from "react";


const Moviedetails = () => {

   const [update, setupdate] = useState(false);

    let history = useHistory();

    let {id} = useParams();

   let{ data : movie , pending , error} = useFetch(`http://localhost:4000/moviesList/${id}`)


   let handleDelete = ()=>{

    fetch(`http://localhost:4000/moviesList/${id}` , {method:"DELETE"})
     .then(()=>{ history.push("/")});

   }

    return ( 
        <div>
            {error && <h1> {error} </h1>}

            {pending && <div className="loader"> </div>}

            { !update && movie && 
            <div className="MOVIE-DETAIL">
                        <h1>Movie Name  : {movie.movieName}</h1>
                        <h1> Casting    : {movie.casting}</h1>
                        <h1> Director   : {movie.director}</h1>
                        <h1> Genres     : {movie.genres}</h1>
                        <h1> Country    : {movie.country}</h1>
                        <h1> Language   : {movie.language}</h1>
                        <h1> Ratings    : {movie.ratings}</h1>
                    <h1> Release Date   : {movie.releaseDate}</h1>
                        <h1> Story      : {movie.story}</h1>
                        <img src={movie.poster}  alt="not found" />
                        <iframe width="750" height="550" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br />
                       
                        <button onClick={()=>{handleDelete(movie.id)}}>Delete</button>
                       <button onClick={()=>{ setupdate(true)}}>Update</button>
                
            </div>
            }
            {update && <Updatemovie previousMovie={movie}/>}          
        </div>
     );
}
 
export default Moviedetails ;