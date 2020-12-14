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

  getData(): Observable<Character> {
    return this.http.get<Character>(`${this.URL}`);
  }
}
