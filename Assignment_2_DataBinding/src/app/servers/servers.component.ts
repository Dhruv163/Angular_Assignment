import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: 
  //`<app-server></app-server>
  //<app-server></app-server>`,

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit
 {
  allowNewServer = true;
  serverCreationStatus = 'No Server got created!';
  UserName = '';

  constructor() {
    //setTimeout(() =>{
    //  if (this.UserName!=''){
     //   this.allowNewServer = false;
    //  }
    //}, 2000);
  }

  ngOnInit() {
  }
    onCreateServer(){
      this.UserName='';
      
      //this.serverCreationStatus = 'Server was created! Name is ' +this.UserName;
    }
  
   onUpdateUserName(event: any)  {
    this.UserName = (<HTMLInputElement>event.target).value;
   }

  }