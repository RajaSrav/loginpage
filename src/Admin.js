import React, {Component} from 'react';
import './App.css';
import logo from './logo/favicon.ico';
class Admin extends React.Component {
  render (){
    return (

      <section className="admin">

        <div className="menu">
        <h3>Menu</h3>
          <div className="button common">
            <button className="button1" type="">Admin</button>
            <button className="button1" type="">Department</button>
            <button className="button1" type="">TPO</button>
            <button className="button1" type="">Change Password</button>
          </div>
        </div>
      </section>
    );
  }

}
export default Admin;
