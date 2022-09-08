
import {Link} from 'react-router-dom';



const Movieslist = ({movies,title}) => {


    return (  

        <div>
            <h1 id="movie-title">{title}</h1>
             {
            movies.map((movie)=>{
                return(
                   
                   <Link to= { `/moviedetails${movie.id}` } >
                    <div key={movie.id} className="movie">
                        <img src={movie.poster} alt="not found"/>
                        <h1> Movie Name : {movie.movieName}</h1>
                        <h1> Casting    : {movie.casting}</h1>
                        <h1> Director   : {movie.director}</h1>
                         <div className="extra-content">
                        <h1> Genres     : {movie.genres}</h1>
                        <h1> Country    : {movie.country}</h1>
                        <h1> Language   : {movie.language}</h1>
                        <h1> Ratings    : {movie.ratings}</h1>
                    <h1> Release Date   : {movie.releaseDate}</h1>
                        
                        
                       
                        </div>
                        
                    </div>
                      </Link>
                )
            })
           }
        </div>
    );
}
 
export default Movieslist;