import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Addmovie from "./components/Addmovie";
import Moviedetails from "./components/Moviedetails";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import SearchPage from "./components/SearchPage";
import Pagenotfound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">

      <Navbar/>

      <Switch>

      <Route exact path="/">
      <Home/>
      </Route>

      <Route path="/add" >
        <Addmovie />
      </Route>

      <Route path="/moviedetails:id">
        <Moviedetails/>
      </Route>

      <Route path="/search:searchVal">
        <SearchPage/>
      </Route>

      <Route path="/*">
        <Pagenotfound/>
      </Route>


      </Switch>

    </div>
    </Router>
  );
}

export default App;
