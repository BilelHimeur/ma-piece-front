import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {VehiculeService} from "./vehicule.service";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
  ],
  providers: [VehiculeService], // Provide your services here
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {
}
