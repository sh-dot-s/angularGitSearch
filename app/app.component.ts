import { Component } from '@angular/core';
import { GitService } from './services/gitsearch.service';
import { SpotifyService } from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [GitService, SpotifyService]
})
export class AppComponent  {

  name = 'and Welcome to Slash Angular Trails';
  
  }
