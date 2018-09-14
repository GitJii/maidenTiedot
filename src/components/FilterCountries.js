import React from 'react'
import Country from './Country'

const FilterCountries = ({ tila }) => {

    const filteredCountries =
        tila.countries.filter(country =>
            country.name.includes(tila.filter))

    const result = () => {
        if (filteredCountries.length > 10) {
            return 'too many matches, you have to be more specific than that'

        } else if (filteredCountries.length > 1) {
            return filteredCountries.map(country => <li key={country.name}> {country.name}</li>)

        } else {
            return filteredCountries.map(country => <Country key={country.name} country={country} />)

        }
    }

    return (
        result()
    )
}

export default FilterCountries