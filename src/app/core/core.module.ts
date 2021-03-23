import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfALreadyLoaded } from './utils/module-import-guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    throwIfALreadyLoaded(parentModule, 'CoreModule'); 
  }
}