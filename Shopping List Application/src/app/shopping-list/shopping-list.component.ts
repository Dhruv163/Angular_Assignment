import { Component } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: ingredients[] = [
    new ingredients ('Bhaji', 5),
    new ingredients ('Pao', 19),
  ];
  constructor(){

  }

}
