import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeHomeComponent } from './anime-home/anime-home.component';


@NgModule({
  declarations: [
    AnimeHomeComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }
