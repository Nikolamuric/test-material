import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Auth from './Container/Auth';

function App(props) {

  return (
    <BrowserRouter>
      <div>
        <Switch>

          <Route
            exact
            path="/login"
            component={() => <h1>Login</h1>}
            props={props}
          />
          <Route
            path="/"
            component={() => <Auth />}
            props={props}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
