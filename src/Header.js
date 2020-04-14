import React, {Component} from 'react';
import './App.css';
import logo from './logo/favicon.ico';
class Header extends React.Component {
  render (){
    return (
      <div className="header">
      <img src={logo} className="image" alt="logo" />
      <header className="clg">
      <h1> Vasireddy Venkatadri Institute of Technology</h1>
      </header>
      </div>
    );
  }

}
export default Header;
