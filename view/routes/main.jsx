import React,{Component} from 'react'
import {render} from 'react-dom'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './home/home.jsx'
import Test from './test/Test.jsx'
class Main extends Component{
    render(){
        return(
                <div>
                <nav className="navbar navbar-light">
                  <ul className="nav navbar-nav">

                 
                    <li><Link to="/">Homes</Link></li>
                    <li><Link to="/registration">Registration</Link></li>
                    <li><Link to="/test">test</Link></li>

                  </ul>
                 </nav>
                     <Route path="/registration" component={Home}/>
                    <Route path="/test" component={Test}/></div>
        		
        	);
       
    }
}

export default Main;

