import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultCharacter } from '../models/character.model';

const baseUrl = 'https://rickandmortyapi.com/api';

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
}
