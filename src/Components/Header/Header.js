import "./Header.css";
import React, { Component } from "react";
import logo from './houser-logo.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
          <Link to ="/"><img src={logo} alt="Logo" /></Link>
        <h1 className="content">Houser</h1>
      </div>
    );
  }
}