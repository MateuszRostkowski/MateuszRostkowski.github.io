import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function About() {
  return <h1>My name is Mat</h1>
}

function Contact() {
  return <h1>You can finde me here :</h1>
}

function Home() {
  return <h1>Home</h1>
}

function NotFound() {
  return <h1>404 - not found</h1>
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="nav-active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="nav-active" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="nav-active" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App
