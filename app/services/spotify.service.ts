import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private stringURL:string;
    private artistURL:string;
    private albumURL:string;
    
    constructor(private http: Http){
        console.log("Spotify service up and running...");

    }
    
    searchMusic(str:string, type = 'artist'){
        this.stringURL = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type;
        return this.http.get(this.stringURL).map(res => res.json());
    }
    getArtist(id:string){
        this.artistURL = 'https://api.spotify.com/v1/artists/'+id;
        return this.http.get(this.artistURL).map(res => res.json());
    }
    getAlbum(id:string){
        this.albumURL = 'https://api.spotify.com/v1/artists/'+id+'/albums';
        return this.http.get(this.albumURL).map(res => res.json());
    }
}