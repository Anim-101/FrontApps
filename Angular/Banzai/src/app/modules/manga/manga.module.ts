import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaRoutingModule } from './manga-routing.module';
import { MangaHomeComponent } from './manga-home/manga-home.component';


@NgModule({
  declarations: [
    MangaHomeComponent
  ],
  imports: [
    CommonModule,
    MangaRoutingModule
  ]
})
export class MangaModule { }
