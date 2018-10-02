import React from 'react';
import axios from 'axios';
import Country from './components/Country'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: '',
      specificCountry: undefined
    }
  }

  componentDidMount() {

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ countries: response.data })
      })
  }

  handleCountryChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
    this.setState({ specificCountry: undefined})
  }

  specificCountryPressed = ({ country }) => {
    this.setState({ specificCountry: country })
  }

  result = () => {

    const filteredCountries =
      this.state.countries.filter(country =>
        country.name.includes(this.state.filter))

    if (this.state.specificCountry === undefined) {

      if (filteredCountries.length > 10) {
        return 'too many matches, you have to be more specific than that'

      } else if (filteredCountries.length > 1) {

        return (filteredCountries.map(country =>
          <div key={country.name}>
            <div onClick={
              () => this.specificCountryPressed({ country })
            }>
              {country.name}
            </div>
          </div>)
        )
      }
      else {
        return (filteredCountries.map(country =>
          <Country key={country.name}
            country={country}
          />)
        )
      }

    }
    else {
      return (

          <Country country={this.state.specificCountry} />
      )
    }
  }
  render() {
    console.log('specificCountry arvo: ', this.state.specificCountry)
    return (

      <div>
        find countries: <input
          value={this.state.filter}
          onChange={this.handleCountryChange} />
        <div>


          {this.result()}

          {/*console.log('specificCountry arvo: ', this.state.specificCountry)*/}
        </div>

      </div>


    )
  }
}

export default App;
