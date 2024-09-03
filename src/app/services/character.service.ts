import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, ResultCharacter } from '../models/character.model';

const baseUrl = 'https://rickandmortyapi.com/api';
const key = 'favorite';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ResultCharacter> {
    return this._http.get<ResultCharacter>(`${baseUrl}/character`);
  }

  search(name: string): Observable<ResultCharacter> {
    return this._http.get<ResultCharacter>(
      `${baseUrl}/character/?name=${name}`,
    );
  }

  favorite(item: Character): void {
    let data = window.localStorage.getItem(key) as any;
    if (data) {
      data = JSON.parse(data);
      const find = data.find((f: Character) => f.id === item.id);
      if (find) {
        const list = data.filter((f: Character) => f.id !== item.id);
        const payload = [...list];
        window.localStorage.setItem(key, JSON.stringify(payload));
      } else {
        const payload = [...data, item];
        window.localStorage.setItem(key, JSON.stringify(payload));
      }
    } else {
      const payload = [item];
      window.localStorage.setItem(key, JSON.stringify(payload));
    }
  }

  getAllFavorite(): any {
    const data = window.localStorage.getItem(key) as any;
    return JSON.parse(data);
  }
}
