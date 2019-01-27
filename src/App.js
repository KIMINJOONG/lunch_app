/*global daum */
import React, { Component } from 'react';
import './App.css';
import PageTemplate from './components/PageTemplate/PageTemplate';
import LunchSearch from './components/LunchSearch/LunchSearch';
import LunchItemList from './components/LunchItemList/LunchItemList';
import Map from './components/Map/Map';

let daumMap = "";
class App extends Component {

  state = {}

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
    let markerPosition = new daum.maps.LatLng(lat, lng)
    let marker = new daum.maps.Marker ({
      position : markerPosition
    });

    const el = document.getElementById('map');
    const staticMapOption = {
      center: new daum.maps.LatLng(lat, lng),
      level: 3, 
    };

    daumMap = new daum.maps.Map(el, staticMapOption);
    marker.setMap(daumMap);

    
    const ps = new daum.maps.services.Places(daumMap); 

    ps.categorySearch('FD6', this.placeSearchCB, {useMapBounds:true});
  }


  placeSearchCB = (data, status, pagination) => {
    if(status === daum.maps.services.Status.OK) {
      const lunchData = data;
      this.setState({
        lunchData
      });
      console.log(this.state.lunchData);
      for(let i = 0; i<data.length; i++) {
        this.displayMarker(lunchData[i]);
      }

    }
  }
  
  displayMarker = (place) => {
    const marker = new daum.maps.Marker({
      map:daumMap
      , position: new daum.maps.LatLng(place.y, place.x)
    });
    const infowindow = new daum.maps.InfoWindow({zIndex:1});
    daum.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
      infowindow.open(daumMap, marker);
    })

  }

  handleSearch = () => {

  }
  render() {
    const {
      handleSearch
    } = this;

    const { lunchData } = this.state;
    return (
      <div>
        <div className="container">
          <div className="banner">
          </div>
          <PageTemplate>
            <LunchSearch onSearch={handleSearch}/>
            <Map></Map>
            <LunchItemList lunchDatas = {lunchData} />
          </PageTemplate>

        </div>
      </div>
    );
  }
}

export default App;
