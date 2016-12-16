import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService{
    private username:string;
    private client_id = '4d3d5927d67d46cd8f4c';
    private client_secret = '6c6f3abbce0d9350c19f9a329a9ec9ec09964ec5';
    
    constructor(private http: Http){
        console.log("Git service up and running...");
        this.username='sree1952425';
    }
    
    getUser(){
        return this.http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }
    getRepos(){
        return this.http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }
    updateUser(username:string){
        this.username = username;
    }
}