
import './App.css';
import Doctors from './Doctors';
import Footer from './Footer';
import Home from './Home';
import Navigation from './Navigation';
import Ourservices from './Ourservices';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">
        <Switch>
        <Route exact path='/'>
           <Navigation/>
           <Home/>
           <Footer/>
        </Route>
        <Route path='/Doctors'>
          <Navigation/>
          <Doctors/>
          <Footer/>
        </Route>
        <Route path='/Pharmacy'>
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
