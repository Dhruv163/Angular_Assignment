import { Component } from '@angular/core';
import { Recipes } from '../receipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipe: Recipes[] = [
     new Recipes('A test Recipe1', 'This is simply a test', 'https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe-1014x1536.jpg'),
  
  new Recipes('A test Recipe1', 'This is simply a test', 'https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe-1014x1536.jpg')
  ];

  consturctor(){

  }
}
