import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPokemonComponent } from './buscar-pokemon.component';

describe('BuscarPokemonComponent', () => {
  let component: BuscarPokemonComponent;
  let fixture: ComponentFixture<BuscarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
