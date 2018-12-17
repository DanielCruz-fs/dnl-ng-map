import { Marker } from './../../classes/marker.class';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { EditModalComponent } from './edit-modal.component';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent {
  markers: Marker[] = [];
  lat: number = -16.526175;
  lng: number = -68.202390;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) { 

    if (localStorage.getItem('marks')) {
      this.markers = JSON.parse(localStorage.getItem('marks'));    
    } else {
      const defaultMarker = new Marker(-16.526175, -68.202390);
      this.markers.push(defaultMarker);
    }

  }

  saveMarker(event) {
    let coords: {lat: number, lng: number} = event.coords;
    let marker = new Marker(coords.lat, coords.lng);
    this.markers.push(marker);
    this.saveMarksStorage();
  }

  saveMarksStorage() {
    localStorage.setItem('marks', JSON.stringify(this.markers));
    this.snackBar.open('Your mark is saved', 'close', {duration: 3000});
  }

  deleteMarker(index: number) {
    this.markers.splice(index, 1);
    this.saveMarksStorage();
    this.snackBar.open('Your mark is gone', 'close', {duration: 3000});
  }

  editMarker(m: Marker) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '300px',
      data: {title: m.title, desc: m.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (!result) {
        return;
      }
      m.title = result.title;
      m.desc = result.desc;
      this.saveMarksStorage();
      this.snackBar.open('Your mark was updated', 'close', {duration: 3000});
    });
  }

}
