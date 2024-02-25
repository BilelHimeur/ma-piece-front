import {Component} from '@angular/core';
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
  vehiculeIntrouvable: string | undefined;

  constructor(private vehiculeService: VehiculeService) {
  }

  onSubmit() {
    this.vehiculeIntrouvable = undefined;
    this.loading = true;
    this.vehiculeDetails = undefined;
    this.vehiculeService.getVehiculeDetails(this.immatriculation).subscribe(
      {
        next: response => {
          this.vehiculeDetails = response.body;
          this.loading = false;
        },
        error: err => {
          this.vehiculeIntrouvable = err.error.message;
          this.loading = false;
        }
      }
    );
  }
}
