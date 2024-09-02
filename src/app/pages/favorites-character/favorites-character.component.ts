import { Component } from '@angular/core';
import { NotFavoritesComponent } from '../../components/not-favorites/not-favorites.component';

@Component({
  selector: 'app-favorites-character',
  standalone: true,
  imports: [NotFavoritesComponent],
  templateUrl: './favorites-character.component.html',
  styleUrl: './favorites-character.component.scss',
})
export class FavoritesCharacterComponent {}
