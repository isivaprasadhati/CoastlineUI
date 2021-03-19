import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoastlineRoutingModule } from './coastline-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CoastlineMaterialModule } from '../coastline-material/coastline-material.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    CoastlineRoutingModule,
    CoastlineMaterialModule
  ]
})
export class CoastlineModule { }
