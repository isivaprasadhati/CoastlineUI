import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatershopComponent } from './watershop/watershop.component';

const routes: Routes = [
  { path: '', component: WatershopComponent },
  { path: 'buy-water', component: WatershopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoastlineshopRoutingModule { }
