import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { RoutingComponent }  from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { GitSearchComponent } from './components/pages/GitSearch.component';
import { MusicComponent } from './components/pages/music.component';
import { ArtistComponent } from './components/pages/artist/artist.component';

@NgModule({
  imports:      [ BrowserModule , RoutingComponent , HttpModule , FormsModule ],
  declarations: [ AppComponent , NavbarComponent , JumbotronComponent , HomeComponent , AboutComponent , GitSearchComponent , MusicComponent , ArtistComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
