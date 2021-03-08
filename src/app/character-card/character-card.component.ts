import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  idCharacter;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private http: HttpClient,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.http
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .subscribe((data) => {
        console.log(data);
        this.idCharacter = data;
      });
  }

  ngOnInit(): void {}
}
