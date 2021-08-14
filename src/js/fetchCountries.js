
function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then((response) => {
        response.json()
    })
    .then((countries) => {
        return countries
    })
}

export default fetchCountries;