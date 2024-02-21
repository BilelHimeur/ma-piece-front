import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {VehiculeDetailsComponent} from "./vehicule-details/vehicule-details.component";


export const routes: Routes = [
  { path: 'vehicule/:immatriculation', component: VehiculeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
