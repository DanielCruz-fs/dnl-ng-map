export class Marker {
  public lat: number;
  public lng: number;
  public title: string = 'Without title';
  public desc: string = 'Without desccription';
  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}