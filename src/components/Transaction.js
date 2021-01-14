import React, { Component } from 'react';
class Transaction extends Component {
  constructor(props) {
    super(props);
    this.setState({
      title: ''
    });
  };

  componentDidMount() {
    console.log('Transaction mounted');
  }

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

export default Transaction;
