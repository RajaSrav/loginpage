import React, {Component} from 'react';
import './App.css';
import Admin from "./Admin";
import {Link} from "react-router-dom";
class Login extends React.Component {

  render (){
    return (

      <section className="main">
        <div className="login">
        <h3> User Login</h3>
          <div className="user_name common">
            <span className="text common">User Name</span>
            <input type="text " id="name" placeholder="Person Name"/>
          </div>
          <div className="user_name common">
<<<<<<< HEAD
            <span className="text common"> Password</span>
            <input type="password" id="name" placeholder="Enter Password"/>
=======
            <span className="text common">Password</span>
            <input type="password" id="name" placeholder="Person Name"/>
          </div>
          <div className="button common">
            <button className="button1" type="">Login</button>
            <button className="button1" type="">Reset</button>
>>>>>>> dbc6806c04178f0bf93c935cbf2bc239262f7aa6
          </div>
            <ul className="ul">
              <li className="li"> <Link to="/admin">Login</Link></li>
              <li className="li"> <Link to="/reset">Reset</Link></li>
            </ul>
        </div>
      </section>
    );
  }

}
export default Login;
