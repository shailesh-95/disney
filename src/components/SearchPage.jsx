import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";
import useFetch from "./useFetch";

const SearchPage = () => {

   let {searchVal} = useParams();
  let{data: movies, pending , error,} = useFetch("http://localhost:4000/moviesList")

    return ( 
         <div>

          <h1>Search Result For {searchVal}</h1>

         {movies && <Movieslist movies={movies.filter((movie)=>{ return movie.movieName.toLowerCase().includes(searchVal.toLowerCase())})} title="Search Result" /> } 


         </div>
        

     );
}
 
export default SearchPage;