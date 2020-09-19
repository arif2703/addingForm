import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Adduser from './Adduser'
import Counts from './Count/Counts'
import ValidateForm from './ValidateForm'


//import Counts from './Count/Counts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (    
    <div className="App">
      <Router>
      <Navigation/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Adduser' component={Adduser}/>
          <Route exact path='/Counts' component={Counts}/>
          <Route exact path='/ValidateForm' component={ValidateForm}/>
        </Switch>
      {/* <Counts/> */}
      </Router>
    </div>    
  );
}

export default App;
