import React, { Component } from 'react';
import SearchBar from '../conatiners/search_bar';
import WeatherList from '../conatiners/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar />
          <WeatherList />
      </div>
    );
  }
}
