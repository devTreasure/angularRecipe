import {Ingredients} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
ingredientsChnaged = new EventEmitter<Ingredients[]>()

  private ing: Ingredients[] =  [
        new Ingredients('Apple', 5),
        new Ingredients('Tomatoes', 7)
       ];

   getIngredients() {
     return this.ing;
   }

    addIngredient(ing: Ingredients) {
      console.log('Ingredients beiing added by service' + ing);
      this.ing.push(ing);
      console.log(this.ing.length);
      this.ingredientsChnaged.emit(this.ing.slice());
    }


  addIngredients(ingredient: Ingredients[]) {
    //for (const i of ingredient) {
     // this.addIngredient(i);
      //this.ingredientsChnaged.emit(this.ing.slice());
   // }
    this.ing.push( ...ingredient);
    this.ingredientsChnaged.emit(this.ing.slice());
  }
}
