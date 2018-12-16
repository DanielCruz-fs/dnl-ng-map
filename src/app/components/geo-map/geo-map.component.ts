import { Marker } from './../../classes/marker.class';
import { Component } from '@angular/core';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent {
  markers: Marker[] = [];
  lat: number = -16.526175;
  lng: number = -68.202390;
  constructor() { 
    const defaultMarker = new Marker(-16.526175, -68.202390);
    this.markers.push(defaultMarker);
  }

  saveMarker(event) {
    let coords: {lat: number, lng: number} = event.coords;
    let marker = new Marker(coords.lat, coords.lng);
    this.markers.push(marker);
  }

}
