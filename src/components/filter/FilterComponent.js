import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { filterProfiles, getAllProfiles } from '../../services/transaction';
import { StoreContext } from '../../index';

import './filter.css';

const FilterComponent = observer(() => {
  const store = useContext(StoreContext);

  const [cardType, setCardType] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const clickHandler = (event) => {
    event.preventDefault();

    const filteredProfiles = filterProfiles(store.profiles, paymentType, cardType);
    console.log('profiles: ', filteredProfiles);
    if (filteredProfiles.length) store.setProfiles(filteredProfiles);
  };

  const clearHandler = (event) => {
    event.preventDefault();
    setPaymentType('');
    setCardType('');
    store.setProfiles(getAllProfiles());
  };

  return (
    <form>
      <label >Payment Method: </label>
      <input id="paymentMethod" type="text" value={paymentType} onChange={(event) => { setPaymentType(event.target.value); }} />

      <label className="padLeft" >Card Type: </label>
      <input id="cardType" type="text" value={cardType} onChange={(event) => { setCardType(event.target.value); }} />

      <div className="filterBtnHolder">
        <input id="filter" className="btn" type="submit" value="filter" onClick={clickHandler} />
        <input id="clear" className="btn" type="submit" value="clear" onClick={clearHandler} />
      </div>
    </form>
  );
});

export default FilterComponent;