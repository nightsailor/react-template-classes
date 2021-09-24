import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'

import {
  Home,
  HelloWorld,
  SignIn,
  SignUp,
} from "../pages";

import 'bootstrap/dist/css/bootstrap.min.css'

const myStorage = window.localStorage;

function App() {
  const user = myStorage.getItem("user");
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/hello-world" exact><HelloWorld /></Route>

        <Route path="/" exact>{user ? <HelloWorld /> : <SignIn />}</Route>

        <Route path="/login" exact>{user ? <Redirect to="/" /> : <SignIn />}</Route>

        <Route path="/register" exact>{user ? <Redirect to="/" /> : <SignUp />}</Route>
        
        {user && (
          <>
            <Route path="/home" exact><Home /></Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App