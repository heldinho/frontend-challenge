import { Component, OnInit } from '@angular/core';
import { NotFavoritesComponent } from '../../components/not-favorites/not-favorites.component';
import { CharacterService } from '../../services/character.service';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';

@Component({
  selector: 'app-favorites-character',
  standalone: true,
  imports: [NotFavoritesComponent, CardCharacterComponent],
  templateUrl: './favorites-character.component.html',
  styleUrl: './favorites-character.component.scss',
})
export class FavoritesCharacterComponent implements OnInit {
  data!: any;

  constructor(private _serviceCharacter: CharacterService) {}

  ngOnInit(): void {
    this.data = this._serviceCharacter.getAllFavorite();
  }
}
