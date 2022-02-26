import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaHomeComponent } from './manga-home/manga-home.component';

const routes: Routes = [
  { path: '', component: MangaHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaRoutingModule { }
