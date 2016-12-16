import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from './artist';
import { Album } from './album';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
})
export class ArtistComponent {
    id:string;
    artist:Artist[];
    album:Album[];
    
    constructor(private spotifyservice:SpotifyService,private route:ActivatedRoute){
    
    }
    
    ngOnInit(){
        this.route.params.map(params => params['id']).subscribe( id => {
            this.spotifyservice.getArtist(id).subscribe(artist => {
                this.artist = artist;
            })
            this.spotifyservice.getAlbum(id).subscribe(album => {
                this.album = album.items;
            })
        });
    }
}
