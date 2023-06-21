import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})

export class DirectivesComponent {
  
  showSecret=false;
  log=[];

  Numbering () {
    this.showSecret=!this.showSecret;
    this.log.push(this.log.length+1);

  }
  
    getColor(){
      return this.log.length >= 5 ? 'blue' : 'white';
    }

}
