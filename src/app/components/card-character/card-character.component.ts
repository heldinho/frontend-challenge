import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { HeartComponent } from '../../assets/icons/heart/heart.component';
import { HeartOComponent } from '../../assets/icons/heart-o/heart-o.component';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [HeartComponent, HeartOComponent],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss',
})
export class CardCharacterComponent implements OnInit {
  @Input() item!: Character;
  isFavorite: boolean = false;

  constructor(private _serviceCharacter: CharacterService) {}

  ngOnInit(): void {
    const data = this._serviceCharacter.getAllFavorite();
    data.filter((f: Character) => {
      if (f.id === this.item.id) {
        this.isFavorite = true;
      }
    });
  }

  fnFavorite(item: Character): void {
    this.isFavorite = !this.isFavorite;
    this._serviceCharacter.favorite(item);
  }
}
