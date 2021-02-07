import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/shared/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './shared/body/body.component';
import { CardComponent } from './shared/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HomeComponent } from './shared/home/home.component';
import { FiltersComponent } from './pages/filters/filters.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ApplicationAndResourceComponent } from './pages/application-and-resource/application-and-resource.component';
import { BuscarPokemonComponent } from './pages/buscar-pokemon/buscar-pokemon.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CardComponent,
    FooterComponent,
    AboutComponent,
    ItemComponent,
    HomeComponent,
    FiltersComponent,
    AcercaDeComponent,
    ApplicationAndResourceComponent,
    BuscarPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
