import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent{

  constructor(private placesService : PlacesService) { }

  get isUserLocationReady(){
    return this.placesService.isUserLocatioReady;
  }

}
