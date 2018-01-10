import React from 'react';
import { About } from './about/index';
import { Home } from './home/index';
import { Login } from './login/index';
import {
  BrowserRouter as Router,
  Route,
  Link, Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    (getSessionDetails())
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function getSessionDetails(){
  var sessionDetails = window.sessionStorage.getItem("username");
  return sessionDetails;
}

export class Routes extends React.Component {

  render() {
    return (<Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <hr />

        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
    );
  }
}
