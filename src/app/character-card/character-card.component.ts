import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  idCharacter;
  constructor(
    private activeRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.activeRoute.params.subscribe((params) => {
      this.idCharacter = this.dataService.getDetails(params['id']);
      console.log(this.idCharacter);
    });
  }

  ngOnInit(): void {}
}
