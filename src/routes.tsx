import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Users from './pages/Users';
import CreateConsole from './pages/CreateConsole';
import Consoles from './pages/Consoles';
import CreateGame from './pages/CreateGame';
import Games from './pages/Games';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} exact path="/" />
            <Route component={CreateUser} exact path="/create-user" />
            <Route component={Users} exact path="/users" />
            <Route component={CreateConsole} exact path="/create-console" />
            <Route component={Consoles} exact path="/consoles" />
            <Route component={CreateGame} exact path="/create-game" />
            <Route component={Games} exact path="/games" />
        </BrowserRouter>
    );
}

export default Routes;