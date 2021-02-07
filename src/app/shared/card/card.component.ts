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
  pokemonart = '';
  pokemonfront = '';
  pokemonback = '';
  pokemonstats1 = [];
  pokemonstats2 = [];
  pokemonstats3 = [];
  pokemonstats4 = [];
  pokemonstats5 = [];
  pokemonstats6 = [];
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
        this.pokemonart = this.pokemon.sprites.other.dream_world.front_default;
        this.pokemonback = this.pokemon.sprites.back_default;
        this.pokemontype = res.types[0].type.name;
        this.pokemonstats1 = res.stats[0].base_stat;
        this.pokemonstats2 = res.stats[1].base_stat;
        this.pokemonstats3 = res.stats[2].base_stat;
        this.pokemonstats4 = res.stats[3].base_stat;
        this.pokemonstats5 = res.stats[4].base_stat;
        this.pokemonstats6 = res.stats[5].base_stat;
        console.log(res);
      }
    );
  }
}
