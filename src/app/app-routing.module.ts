import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BodyComponent } from './shared/body/body.component';
import { CardComponent } from './shared/card/card.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ApplicationAndResourceComponent } from './pages/application-and-resource/application-and-resource.component';
import { BuscarPokemonComponent } from './pages/buscar-pokemon/buscar-pokemon.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'body', component: BodyComponent},
  {path: 'card/:id', component: CardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component: ItemComponent },
  {path: 'acerca_de', component: AcercaDeComponent},
  {path: 'aplicacionesyrecursos', component: ApplicationAndResourceComponent},
  {path: 'searchpokemon', component: BuscarPokemonComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
