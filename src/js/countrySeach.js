import debounce from 'lodash/debounce';
import fetchCountries from './fetchCountries';
import countryDataTpl from '../templates/country-data.hbs';


const refs = {
    input: document.querySelector("#name-input"),
    countriesList: document.getElementById('countries'),
  };

  refs.input.addEventListener ("input", debounce(onInputChange, 500));


  function onInputChange(event) {
    const searchQuery = event.target.value;
    console.log(searchQuery)
    fetchCountries(searchQuery)
    .then (createCountryMarkup)
    .catch(onFetchError)
  };

function createCountryMarkup (countries){
    
  return countries
    .map((country) => countryDataTpl(country))
    .join('');

     refs.countriesList.insertAdjacentHTML("beforeend", countriesInHtml);
  }  






function onFetchError(error) {
  alert ("The requested country is not found")
  console.log(`Something's gone wrong: ${error}`)
}



