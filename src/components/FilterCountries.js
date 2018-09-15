import React from 'react'
import Country from './Country'

const FilterCountries = ({ tila }) => {

    const filteredCountries =
        tila.countries.filter(country =>
            country.name.includes(tila.filter))

    const result = () => {

        const showSpecificCountry = ({country}) => {
            return () => 
                <Country key={country.name}
                    country={country}
                />
            }

        if (filteredCountries.length > 10) {
            return 'too many matches, you have to be more specific than that'

        } else if (filteredCountries.length > 1) {
            return filteredCountries.map(country =>
                <div key={country.name}>
                    <div onClick={() => showSpecificCountry(country)}>
                        {country.name}
                    </div>
                </div>
            )

        } else {
            return filteredCountries.map(country =>
                <Country key={country.name}
                    country={country}
                />)
        }
    }

    return (
        result()
    )
}

export default FilterCountries