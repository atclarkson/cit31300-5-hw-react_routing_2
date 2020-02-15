import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Data from "./components/Data";
import Cool from "./components/Cool";
import Colorpage from "./components/Colorpage";
import User from "./components/User";
import MovieInfo from "./components/MovieInfo";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/data" component={Data}/>
                    <Route path="/data/:id?/:name?/:age?/:color?" component={User}/>
                    <Route exact path="/cool" component={Cool}/>
                    <Route path="/cool/:id" component={MovieInfo}/>
                    <Route path="/:color" component={Colorpage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
