import { Link } from "react-router-dom";


const Pagenotfound = () => {


    return (  

        <div className="pagenotfound">
            <h1>Page not Found</h1>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
}
 
export default Pagenotfound;