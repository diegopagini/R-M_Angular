import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterCardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
