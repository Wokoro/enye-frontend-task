import React, { useContext } from 'react';

import { StoreContext } from '../../index';
import { observer } from 'mobx-react';
import './transaction.css';

const Transaction = observer(() => {
  const store = useContext(StoreContext);

  return (
    <div className="transactionsHolder">
      <div className="headings">
        <span>S/N</span>
        <span>First Name</span>
        <span>Last Name</span>
        <span>Gender</span>
        <span>Email</span>
        <span>Phone Number</span>
        <span>Payment Method</span>
        <span>Last Login</span>
      </div>
      <div className="course-list-body">
        {store.currentDisp.map((profile, index) => (
          <div key={index} className="liner">
            <span>{index + 1}</span>
            <span>{profile.FirstName}</span>
            <span>{profile.LastName}</span>
            <span>{profile.Gender}</span>
            <span>{profile.Email}</span>
            <span>{profile.PhoneNumber}</span>
            <span>{profile.PaymentMethod}</span>
            <span>{profile.LastLogin}</span>
            <span className="moreBtn">...</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Transaction;