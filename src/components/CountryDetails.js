import React from 'react';
import Countries from './../countries.json';
import { Link } from "react-router-dom";

function CountryDetails(props) {
  console.log('props', props);

  // The dynamic part of the path in the Navigation bar
  // becomes available thanks to react-router on the `props`
  // and we can access it via  `props.match.params`, like:

  // <Route path="/Countrys/:idOfTheCountry" ... />   ===>  `props.match.params.idOfTheCountry`
  
//countryId lo hemos enviado de app.js (url)

  const CountryId = props.match.params.countryId;


  // We iterate over the array of the Countrys to find that one Country by it's id
  const country = Countries.find((CountryObj) => CountryObj.cca3 === CountryId);
  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((id) => {
                const country = Countries.find((CountryObj) => CountryObj.cca3 === id);
                    return (
                <li key={id}>
                  <Link to={`/${id}`}>{country.name.official}</Link>
                </li>

                    )
                })}
                
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
