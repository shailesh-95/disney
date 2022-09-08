import {Link} from 'react-router-dom';
import { useState } from 'react';



const Navbar = () => {

    const [searchVal, setSearchVal] = useState("");
    return ( 
        
        <nav className="navbar">
            
            <h1>Disney</h1>

            <input type="search" value={searchVal}  onChange={(e)=>{setSearchVal(e.target.value)}}  />
            <Link to={`/search${searchVal}`}><button id="searchbutton">Search</button></Link>

           <div className='nav2'>
              <Link to="/">Home</Link>
              <Link to="/add">Add New Movie</Link>
           </div>
        </nav>
     );
}
 
export default Navbar ;