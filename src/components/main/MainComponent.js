import React from 'react';
// import { getAllProfiles } from '../services/transaction';

// import { StoreContext } from '../index';

import FilterComponent from '../filter/FilterComponent';
import SearchComponent from '../search/SearchComponent';
import TrasactionListComponent from '../transaction/TransactionListComponent';
import PaginationComponent from '../pagination/PaginationComponent';
import './main.css';

export default function Transaction() {
  return (
    <div>
      <div className="section">
        <FilterComponent />
        <SearchComponent />
      </div>
      <PaginationComponent />
      <TrasactionListComponent />
      <PaginationComponent />
    </div>
  );
}
