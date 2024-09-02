import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';
import { HeartComponent } from '../../assets/icons/heart/heart.component';
import { HeartOComponent } from '../../assets/icons/heart-o/heart-o.component';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [HeartComponent, HeartOComponent],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss',
})
export class CardCharacterComponent {
  @Input() item!: Character;
  isFavorite: boolean = false;
}
