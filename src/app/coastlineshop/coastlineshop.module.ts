import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoastlineshopRoutingModule } from './coastlineshop-routing.module';
import { WatershopComponent } from './watershop/watershop.component';


@NgModule({
  declarations: [WatershopComponent],
  imports: [
    CommonModule,
    CoastlineshopRoutingModule
  ]
})
export class CoastlineshopModule { }
