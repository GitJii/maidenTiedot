import React from 'react';
import axios from 'axios'
import FilterCountries from './components/FilterCountries';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
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
  }

  render() {

    return (

      <div>
        find countries: <input
          value={this.state.filter}
          onChange={this.handleCountryChange}
        />

        <div>
          <FilterCountries tila={this.state}/>
        </div>
      </div>

    )
  }
}

export default App;
