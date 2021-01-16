import React, { Component } from 'react';
class Transaction extends Component {
  constructor(props) {
    super(props);
    this.setState({
      title: ''
    });
  };

  componentDidMount() {
    console.log('mounted');
    this.setState({
      title: 'Transaction'
    });
  }

  render() {
    return (
      <div>
        Transaction
      </div>
    );
  }
}

export default Transaction;
