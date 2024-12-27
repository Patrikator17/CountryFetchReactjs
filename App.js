import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
// import './App.css';
const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <SearchBar />
        <Filter />
      </div>
    </>
  );
};

export default App;
