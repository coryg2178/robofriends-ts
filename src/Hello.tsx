import React, { Component } from 'react';
import './Hello.css';

type HelloProps = { greeting?: string };

class Hello extends Component<HelloProps> {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World!</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default Hello;
