import { Component } from '@angular/core';
import { GitService } from '../../services/gitsearch.service';

@Component({
  moduleId: module.id,
  selector: 'gitsearch',
  templateUrl: 'GitSearch.component.html',
})
export class GitSearchComponent  {
  user:any;
  repos:any[];
  username:string;
  
  constructor(private gitservice: GitService){
    this.user = false;
  }
  
  searchUser(){
    this.gitservice.updateUser(this.username);  
    this.gitservice.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
      });
    this.gitservice.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
      });
  }
}
