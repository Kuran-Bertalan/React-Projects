import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      covid_data: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((covid) => {
        if (covid.Message === "Caching in progress") {
          fetch("./data/Data.json")
            .then((response) => response.json())
            .then((data) => this.setState({ covid_data: data.Countries }));
        } else {
          this.setState({ covid_data: covid.Countries });
        }
      })
      .catch((error) => console.log(error));
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    console.log(this.state.covid_data);
    const { covid_data, searchField } = this.state;
    const filteredCountries = covid_data.filter((country) =>
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> COVID-19 Daily Report</h1>
        <SearchBox
          placeholder="Search Countries"
          handleChange={this.handleChange}
        />
        <CardList covid_data={filteredCountries} />
      </div>
    );
  }
}
export default App;
