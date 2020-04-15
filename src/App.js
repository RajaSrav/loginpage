import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Admin from "./Admin";
import {Route, Link} from "react-router";
function App() {
  return (
    <div className="">


    <Route exact path="/" component={Header}/>
    <Route exact path="/admin" component={Admin}/>
    <Route exact path="/" component={Login}/>
    <Route exact path="/" component={Footer}/>
    </div>
  );
}
export default App;
