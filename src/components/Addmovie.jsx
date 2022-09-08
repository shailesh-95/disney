import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const Addmovie = () => {
     
    const [movieName, setmovieName] = useState("");
    const [casting, setcasting] = useState("");
    const [director, setdirector] = useState("");
    const [genres, setgenres] = useState("");
    const [ratings, setratings] = useState("");
    const [language, setlanguage] = useState("");
    const [country, setcountry] = useState("");
    const [releaseDate, setreleaseDate] = useState("");
    let { data : movies } = useFetch("http://localhost:4000/moviesList");

    let history = useHistory();


    let handleSubmit = (e)=>{

        e.preventDefault();

        let movie = {movieName , casting , director , genres , ratings , language , country , releaseDate };

        

        var duplicate = movies.some((m)=>{ return m.movieName === movieName});

       
        if(duplicate === false && movieName !="")
        {
            fetch("http://localhost:4000/moviesList" ,
           {
             method: "POST" ,
             headers: {"Content-Type":"application/json"} ,
             body : JSON.stringify(movie)
           })

           .then(()=>{ history.push('/') })
        }
        else
        {
            alert("Movie already existing Or input is empty, please try to add new movie");
        }
    

    }

    return ( 
        <div>
          
           <div className="addmovie">
           <h2 id="addmovieh1">Add Movie</h2>
           <hr />
               <form onSubmit={handleSubmit}>

                    <div>

                        <label htmlFor="">Movie Name :</label>
                        <input type="text" value={movieName} onChange={(e)=>{setmovieName(e.target.value)}}/>

                        <label htmlFor="">Casting :</label>
                        <input type="text"  value={casting} onChange={(e)=>{setcasting(e.target.value)}} />

                        <label htmlFor="">Director :</label>
                        <input type="text"  value={director} onChange={(e)=>{setdirector(e.target.value)}} />

                        <label htmlFor="">Genres :</label>
                        <input type="text"  value={genres} onChange={(e)=>{setgenres(e.target.value)}} />

                        <label htmlFor="">Ratings :</label>
                        <input type="text"  value={ratings} onChange={(e)=>{setratings(e.target.value)}} />

                        <label htmlFor="">Language :</label>
                        <input type="text"  value={language} onChange={(e)=>{setlanguage(e.target.value)}} />

                        <label htmlFor="">Country :</label>
                        <input type="text"  value={country} onChange={(e)=>{setcountry(e.target.value)}} />

                        <label htmlFor="">Release Date :</label>
                        <input type="text"  value={releaseDate} onChange={(e)=>{setreleaseDate(e.target.value)}} />

                    </div>
                
                    <input type="submit" value="Add Movie" />

               </form>

           </div>
        </div>
     );
}
 
export default Addmovie;