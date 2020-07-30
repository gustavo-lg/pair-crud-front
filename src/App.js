import React, {Fragment} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Home from './components/Home';
import Add from './components/Add';

const App = () => {
  return(
    <Fragment>
      <Router>
      <Navbar bg="dark" variant="dark" className="px-5">
      <div className="container">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/add'>Add</Nav.Link>
        </Nav>
      </div>
    </Navbar>   
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/add' component={Add}/>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
