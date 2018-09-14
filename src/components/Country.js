import React from 'react'

const Country = ({ country }) => {
    return (
        <div>
            <h2> {country.name} </h2>
            <div>
                capital:  {country.capital}
            </div>
            <div>
                population: {country.population}
            </div>
            
            <img src={country.flag} alt="" width="400" height="300" />

        </div>
    )
}

export default Country