import L from 'leaflet';
import './map.css';
import React, { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
      
      const map = L.map('mapid').setView([-6.2808, 106.1310], 10);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
      }).addTo(map);
  
      return () => {
        map.remove();
      };
    }, []); 
  
    return (
      <div id="mapid" ></div>
    );
  };
  
  export default Map;