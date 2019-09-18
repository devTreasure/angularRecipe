import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list-service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  /*
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoes', 7)
  ];

  */

  ingredients: Ingredients[];

  constructor(private shoppingServ: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingServ.getIngredients();
    console.log(this.ingredients.length);
  }


  addIngredient(i: Ingredients) {
    this.shoppingServ.addIngredient(i);
  }


  catchIngredient(i: Ingredients) {
    //moved to Service
    //this.ingredients.push(i);
    this.shoppingServ.addIngredient(i);
  }



}
