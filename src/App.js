import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="banner">
          </div>
          <div className="main">
            <div className="leftMenu">
              <span>왼쪽메뉴</span>
            </div>
            <div className="map">
              <span>지도영역</span>
            </div>
            <div className="list">
              <span>리스트 영역</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
