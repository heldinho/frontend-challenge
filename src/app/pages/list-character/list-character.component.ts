import { Component, OnInit } from '@angular/core';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';
import { Character, Info } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-character',
  standalone: true,
  imports: [CardCharacterComponent],
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.scss',
})
export class ListCharacterComponent implements OnInit {
  info?: Info;
  data?: Character[];
  count$!: Observable<number>;
  text!: '';

  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this.retrieveCharacter();
  }

  retrieveCharacter(): void {
    this._characterService.getAll().subscribe({
      next: data => {
        this.info = data.info;
        this.data = data.results;
      },
      error: e => console.error(e),
    });
  }

  change(event: any): void {
    this.text = event.target.value;
    this.search();
  }

  search(): void {
    this._characterService.search(this.text).subscribe({
      next: data => {
        this.info = data.info;
        this.data = data.results;
      },
      error: e => console.error(e),
    });
  }
}
