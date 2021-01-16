import React, { useContext, useEffect } from 'react';
import Header from './components/header/Header';
import MainComponent from './components/main/MainComponent';
import { StoreContext } from './index';
import { getAllProfiles } from './services/transaction';

import './App.css';
const App = () => {
  const store = useContext(StoreContext);

  useEffect(() => {
    fetch('https://api.enye.tech/v1/challenge/records')
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('profiles', JSON.stringify(json.records.profiles));
        store.setProfiles(getAllProfiles());
      });
  });




  return (
    <div className='holder'>
      <Header title="Transactions" />
      <MainComponent className="holder" />
    </div>
  );
};

export default App;
