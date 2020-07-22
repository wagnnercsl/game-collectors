import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Users from './pages/Users';
import CreateVideogame from './pages/CreateVideogame';
import Videogames from './pages/Videogames';
import CreateGame from './pages/CreateGame';
import Games from './pages/Games';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} exact path="/" />
            <Route component={CreateUser} exact path="/create-user" />
            <Route component={Users} exact path="/users" />
            <Route component={CreateVideogame} exact path="/create-videogame" />
            <Route component={Videogames} exact path="/videogames" />
            <Route component={CreateGame} exact path="/create-game" />
            <Route component={Games} exact path="/games" />
        </BrowserRouter>
    );
}

export default Routes;