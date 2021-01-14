import React, { useState } from 'react';
import { filterProfiles } from '../services/transaction';

function FilterComponent(props) {
  const [cardType, setCardType] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const filterHolder = {
    marginTop: "1.3em",
    marginBottom: "2em"
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const filteredProfiles = filterProfiles(props.default, paymentType, cardType);
    props.filterHandler(filteredProfiles);
  };

  const clearHandler = (event) => {
    event.preventDefault();
    setPaymentType('');
    setCardType('');
    console.log('page Data: ', props.default);
    props.filterHandler(props.default);
  };

  return (
    <div style={filterHolder}>
      <h5>Filter</h5>
      <form>
        <label >Payment Method: </label>
        <input id="paymentMethod" type="text" value={paymentType} onChange={(event) => { setPaymentType(event.target.value); }} />

        <label >Card Type: </label>
        <input id="cardType" type="text" value={cardType} onChange={(event) => { setCardType(event.target.value); }} />

        <input id="filter" type="submit" value="filter" onClick={clickHandler} />
        <input id="clear" type="submit" value="clear" onClick={clearHandler} />
      </form>
    </div>
  );
};

export default FilterComponent;
