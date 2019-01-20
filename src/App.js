/*global daum */
import React, { Component } from 'react';
import './App.css';
import PageTemplate from './components/PageTemplate/PageTemplate';
import LunchSearch from './components/LunchSearch/LunchSearch';
import Map from './components/Map/Map';

class App extends Component {

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
