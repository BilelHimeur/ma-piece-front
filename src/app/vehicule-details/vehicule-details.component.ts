import {Component, OnInit} from '@angular/core';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.scss'],
})
export class VehiculeDetailsComponent implements OnInit {

  vehiculeDetails: any = null;

  constructor() {
  }

  ngOnInit(): void {
  }
}
