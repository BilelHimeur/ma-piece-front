import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {VehiculeDetailsComponent} from "./vehicule-details/vehicule-details.component";
import {VehiculeService} from "./vehicule.service";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
    VehiculeDetailsComponent,
  ],
  providers: [VehiculeService], // Provide your services here
  bootstrap: [AppComponent],
  exports: [
    VehiculeDetailsComponent
  ]
})
export class AppModule {
}
