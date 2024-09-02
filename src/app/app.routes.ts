import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListCharacterComponent } from './pages/list-character/list-character.component';
import { FavoritesCharacterComponent } from './pages/favorites-character/favorites-character.component';

export const routes: Routes = [
  { path: '', component: ListCharacterComponent },
  { path: 'favorites', component: FavoritesCharacterComponent },
  // { path: '', outlet: 'secondary', component: HomeComponent },
  // { path: '/list', outlet: 'secondary', component: ListComponent },
  // { path: '/favorite', outlet: 'secondary', component: FavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
