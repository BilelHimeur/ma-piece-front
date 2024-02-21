import {Component, ViewChild} from '@angular/core';
import {AppModule} from "./app.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VehiculeService} from "./vehicule.service";
import {VehiculeDetails} from "./vehicule-details";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    AppModule,
    FormsModule,
    CommonModule
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ma pièce à moi par AUTODISTRIBUTION';
  immatriculation: string = '';
  vehiculeDetails: VehiculeDetails | undefined;
  loading: boolean = false;

  formSubmitted: boolean = false;

  constructor(private vehiculeService: VehiculeService) {
  }

  isValidImmatriculation(): boolean {
    const regexPattern = /[A-Za-z]{2}-[0-9]{3}-[A-Za-z]{2}/;
    return regexPattern.test(this.immatriculation);
  }

  onSubmit() {
    if (this.isValidImmatriculation()) {
      this.loading = true;
      this.vehiculeDetails = undefined;
      this.vehiculeService.getVehiculeDetails(this.immatriculation).subscribe(results => {
        this.vehiculeDetails = results;
        this.loading = false;
      })
    }
  }
}
