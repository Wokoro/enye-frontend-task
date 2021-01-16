import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { filterByUserName, filterProfiles } from '../../services/transaction';
import { StoreContext } from '../../index';

import './search.css';

const SearchComponent = observer(() => {
  const store = useContext(StoreContext);

  const clickHandler = (event) => {
    event.preventDefault();
    const filteredProfiles = filterByUserName(store.profiles, event.target.value);
    if (filterProfiles.length) store.setProfiles(filteredProfiles);
  };

  return (
    <div className={'search'}>
      <label>Search</label>
      <input id="search" type="search" onChange={(event) => clickHandler(event)} placeholder="Enter User name..."></input>
    </div>
  );
});

export default SearchComponent;