import React, { Component } from 'react';
import "../styles/Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Filter the Heading by using the down/up arrows.</p>
      </div>
    )
  }
}