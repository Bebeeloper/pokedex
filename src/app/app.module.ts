import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { InfiniteScrollModule } from "ngx-infinite-scroll";
=======
import { SearchComponent } from './components/search/search.component';
>>>>>>> uichanges

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    InfiniteScrollModule
=======
    FormsModule
>>>>>>> uichanges
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
