import React, { Component } from 'react';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.setState({
      title: ''
    });
  };

  componentDidMount() {
    console.log('Search mounted');
  }

  render() {
    const searchHolder = {
      textAlign: "right"
    };

    return (
      <div style={searchHolder}>
        <label>Search</label>
        <input id="search" type="search"></input>
      </div>
    );
  }
}

export default SearchComponent;
