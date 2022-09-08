import { useState } from "react";
import { useHistory } from "react-router-dom";


const Updatemovie = ({previousMovie}) => {

    const [movieName, setmovieName] = useState(previousMovie.movieName);
    const [casting, setcasting] = useState(previousMovie.casting);
    const [director, setdirector] = useState(previousMovie.director);
    const [genres, setgenres] = useState(previousMovie.genres);
    const [ratings, setratings] = useState(previousMovie.ratings);
    const [language, setlanguage] = useState(previousMovie.language);
    const [country, setcountry] = useState(previousMovie.country);
    const [releaseDate, setreleaseDate] = useState(previousMovie.releaseDate);

    let history = useHistory();

    let handleSubmit = (e)=>{

        e.preventDefault();

        let updatedmovie = {movieName , casting , director , genres , ratings , language , country , releaseDate };

       
       
        
            fetch(`http://localhost:4000/moviesList/${previousMovie.id}`,
           {
             method: "PUT" ,
             headers: {
                "Accept": "application/json",
                "Content-Type":"application/json"
            },
             body : JSON.stringify(updatedmovie)
           })

           .then(()=>{ history.push('/') })
           }
      

    

  

    return (  

        <div className="addmovie">
         
         <h2 id="addmovieh1">Update Movie</h2>

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
                
                    <input type="submit" value="Update Movie" />

               </form>

        </div>
    );
}
 
export default Updatemovie;