import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import CountriesContainer from './components/CountriesContainer';
import './CountryCard.css'
// import './App.css';
const App = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <Header />
      <div className="main-container">
        <SearchBar setQuery={setQuery}/>
        <Filter />  
      </div>
      <CountriesContainer query={query}/>
    </>
  );
};

export default App;
