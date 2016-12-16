import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../pages/artist/artist';

@Component({
  moduleId: module.id,
  selector: 'music',
  templateUrl: 'music.component.html',
})
export class MusicComponent  {
    searchArtist:string;
    searchResult:Artist[];
    
    constructor(private spotifyservice:SpotifyService){
    
    }
    searchMusic(){
        this.spotifyservice.searchMusic(this.searchArtist).subscribe(
            res => {
                this.searchResult = res.artists.items;
                console.log(res.artists);
            }
        );
    }
}
