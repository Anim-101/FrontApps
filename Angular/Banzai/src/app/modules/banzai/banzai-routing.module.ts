import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanzaiComponent } from './banzai/banzai.component';

const routes: Routes = [
  { path: '', component: BanzaiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanzaiRoutingModule { }
