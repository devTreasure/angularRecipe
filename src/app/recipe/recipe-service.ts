import {Recipe} from './recipe.model';
import {Ingredients} from '../shared/ingredients.model';
import {Injectable, EventEmitter} from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list-service';
@Injectable()
export class RecipeService {

   private recipe: Recipe[] = [
    new Recipe('A Test Recipe', 'this is ssimpy test',
      'https://hips.hearstapps.com/vidthumb/images/chickenparmstuffedpeppers1-1519936991.jpg?' +
      'crop=1.00xw:0.752xh;0,0.106xh&resize=980:*' ,[ new Ingredients('Jalepinio', 1), new Ingredients('Cream cheese', 3) ]),
      new Recipe('Veg burger', 'Healthy veggy',
      'https://www.contentednesscooking.com/wp-content/uploads/2015/12/Veggie-Burger-with-Cauliflower-1.jpg', [new Ingredients('Spinach', 23),
        new Ingredients('Mushroom', 6)])
  ];

   recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {

    }
   getRecipe() {
     return this.recipe.slice();
   }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients);
  }
}
