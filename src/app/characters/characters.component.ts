import { Component, OnInit } from '@angular/core';
import { CharacterData, Character } from '../interfaces/character';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Array<CharacterData>;
  constructor(private charactersService: DataService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getData().subscribe((response: Character) => {
      this.characters = response.results;
      console.log(response);
    });
  }
}
