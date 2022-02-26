import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'anime', loadChildren: () => import('./modules/anime/anime.module').then((m) => m.AnimeModule) },
  { path: 'manga', loadChildren: () => import('./modules/manga/manga.module').then((m) => m.MangaModule) },
  { path: 'banzai', loadChildren: () => import('./modules/banzai/banzai.module').then((m) => m.BanzaiModule) },
  { path: '', loadChildren: () => import('./modules/banzai/banzai.module').then((m) => m.BanzaiModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
