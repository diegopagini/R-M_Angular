import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  URL: 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  async getCharacter() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    const data = await response.json();
    console.log(data);
    return data.results;
  }

  searchCharacters(query = '', page = 1) {
    const filter = `${this.URL}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${this.URL}/${id}`);
  }
}
