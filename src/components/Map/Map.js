import React, { Component } from 'react';
import DaumMap from 'daum-maps-react';


class Map extends Component {
    customRender = (element, daum) => {

        console.log(element, daum, this) // map element, daum api, Example Component

        const lat = 37.503716, lng = 127.044844

        daum.maps.load(_ => {

            const map = new daum.maps.Map(element, {
                center: new daum.maps.LatLng(lat, lng),
                level: 3
            })
    
            const marker = new daum.maps.Marker({
                position: new daum.maps.LatLng(lat, lng)
            })

            marker.setMap(map)

        })

    }

    render () {
        return (
            <div className="map">

                <DaumMap
                    apiKey='my key'
                    mapId={ 'daum-map' }
                    render= { this.customRender }
                />

            </div>
        )
    }
}

export default Map;

