import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  idCharacter;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idCharacter = this.activeRoute.snapshot.params.id;
  }
}
