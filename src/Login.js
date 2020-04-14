import React, {Component} from 'react';
import './App.css';
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
            <span className="text common">Password</span>
            <input type="password" id="name" placeholder="Person Name"/>
          </div>
          <div className="button common">
            <button className="button1" type="">Login</button>
            <button className="button1" type="">Reset</button>
          </div>
        </div>
      </section>
    );
  }

}
export default Login;
