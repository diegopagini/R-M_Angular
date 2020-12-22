import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterData, Character } from '../interfaces/character';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Array<CharacterData> = [];

  constructor(private charactersService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  async getCharacter() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    const data = await response.json();
    console.log(data);
    this.characters = data.results;
    return data;
  }

  verMas(i) {
    this.router.navigate(['characters', i]);
  }
}
