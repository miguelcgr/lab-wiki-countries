import React, { Component } from 'react';
import './../App.css';
import { Link } from "react-router-dom";



class CountriesList extends React.Component {
 
  
    render() {
      const { countries } = this.props;
  
      return (
        <div>
        
          {countries.map(country => {

            return (
                <div className="col-5" key={country.cca3}>
               <div className="list-group">
                <Link to={`/${country.cca3}`}>{country.name.official}</Link>
                
                 </div>
                 </div>
            );
          })}
        </div>
      );
    }
  };
  
  
  export default CountriesList;
 