import React from 'react';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
function App() {

  return (
    <div className='container'>
      <Header title="Transactions" />
      <MainComponent />
    </div>
  );
}

export default App;
