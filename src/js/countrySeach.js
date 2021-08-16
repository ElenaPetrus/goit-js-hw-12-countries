import debounce from 'lodash/debounce';
import { alert, error} from '@pnotify/core';

import fetchCountries from './fetchCountries';


import oneCountryDataTpl from '../templates/country-data.hbs';
import manyCountriesTpl from '../templates/many-countries.hbs';

export default createCountryMarkup;


const refs = {
    input: document.querySelector("#name-input"),
    countriesList: document.getElementById('countries'),
  };

  refs.input.addEventListener ("input", debounce(onInputChange, 500));


  function onInputChange(event) {

    const searchQuery = event.target.value;
    console.log(searchQuery);

    refs.countriesList.innerHTML = '';

    fetchCountries(searchQuery)
    
  };

function createCountryMarkup (countryData){

    if (countryData.length  === 1) {
      refs.input.value = '';
      refs.countriesList.insertAdjacentHTML("beforeend", oneCountryDataTpl(countryData));
    } else if (countryData.length  >= 2 && countryData.length  <= 10) {
      refs.countriesList.insertAdjacentHTML("beforeend", manyCountriesTpl(countryData));
    } else if  (countryData.length  > 10) {
    alert({
      type: 'notice',
      text: 'Please specific your specify. Too many matches',
      delay: 1000,
    });
  } else if  (countryData.status === 404 || !countryData.length  > 1) {
    alert({
      type: 'error',
      text: 'The required country is not found',
      delay: 1000,
    });
    return 
  }; 
}



