import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanzaiRoutingModule } from './banzai-routing.module';
import { BanzaiComponent } from './banzai/banzai.component';


@NgModule({
  declarations: [
    BanzaiComponent
  ],
  imports: [
    CommonModule,
    BanzaiRoutingModule
  ]
})
export class BanzaiModule { }
