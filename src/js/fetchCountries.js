import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

import createCountryMarkup from "./countrySeach";

export default fetchCountries;


function fetchCountries(searchQuery) {
     fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then((response) => {
        return response.json()
    })
    .then((countryData) => {
        createCountryMarkup (countryData)
    })
    .catch(onFetchError)
}

function onFetchError(er) {
    console.log(`Something's gone wrong: ${er}`)
  };


