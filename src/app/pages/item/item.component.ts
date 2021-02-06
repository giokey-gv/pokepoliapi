import { Component, OnInit, ViewChild } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  data: any;
  dataSource: MatTableDataSource<any> | undefined;

  constructor(private pokemonService: PokemonService, private router: Router) { }

    ngOnInit(): void {
    this.getPokemons();
  }
// TRAE Y MUESTRAPOKEMON
  getPokemons() {
    let pokemonData;

    for (let i = 1; i <= 300; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };

          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}