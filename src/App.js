/*global daum */
import React, { Component } from 'react';
import './App.css';
import PageTemplate from './components/PageTemplate/PageTemplate';
import LunchSearch from './components/LunchSearch/LunchSearch';
import Map from './components/Map/Map';

class App extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.loadMap(lat, lng);
      }
    )
    
  }

  loadMap = (lat, lng) => {
    const el = document.getElementById('map');
    let daumMap = new daum.maps.Map(el, {
      center: new daum.maps.LatLng(lat, lng),
    });
  }

  handleSearch = () => {

  }
  render() {
    const {
      handleSearch
    } = this;

    return (
      <div>
        <div className="container">
          <div className="banner">
          </div>
          <PageTemplate>
            <LunchSearch onSearch={handleSearch}/>
            <Map></Map>
          </PageTemplate>

        </div>
      </div>
    );
  }
}

export default App;
