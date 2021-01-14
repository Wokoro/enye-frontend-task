import React, { Component } from 'react';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  };

  static getDerivedStateFromProps(props, state) {
    return { profiles: props.profiles };
  }

  static async componentDidMount() { }

  render() {
    const profiles = this.state.profiles;

    return (

      <table className="table">
        <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone number</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Last Login</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index} onClick={this.clickHandler}>
              <td>{index + 1}</td>
              <td>{profile.FirstName}</td>
              <td>{profile.LastName}</td>
              <td>{profile.Gender}</td>
              <td>{profile.Email}</td>
              <td>{profile.PhoneNumber}</td>
              <td>{profile.PaymentMethod}</td>
              <td>{profile.LastLogin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Transaction;
