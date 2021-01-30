import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:any = '';
  pokemontype = [];
  pokemonimg = '';

  constructor(private PokemonService: PokemonService, private ActivatedRoute: ActivatedRoute){
    this.ActivatedRoute.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    );
  }

  ngOnInit(): void {
  }
  getPokemon(id: number){
    this.PokemonService.getPokemons(id).subscribe(
      res =>{
        this.pokemon = res
        this.pokemonimg = this.pokemon.sprites.front_default;
        this.pokemontype = res.types[0].type.name;
        console.log(res);
      }
    );
  }
}
