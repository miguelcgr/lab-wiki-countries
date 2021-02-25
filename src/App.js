
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';
import React, { Component } from 'react'
import Countries from './countries.json';


export default class App extends Component {
  
  state = {
    countries: Countries
  };

  render() {
    const { countries }= this.state;

    return (
      <div className="App">
      <Navbar />
    
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Route path='/:countryId' component={CountryDetails} exact/>
      </div>
      </div>
    </div>
    )
  }
}
