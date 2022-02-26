import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeHomeComponent } from './anime-home/anime-home.component';

const routes: Routes = [
  { path: '', component: AnimeHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }