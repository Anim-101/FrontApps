import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonFoundComponent } from './components/non-found/non-found.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    NonFoundComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
