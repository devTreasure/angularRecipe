import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe-service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

/*  moved this to recipe Service
  recipe = [] = [
     new Recipe('A Test Recipe', 'this is ssimpy test',
    'https://hips.hearstapps.com/vidthumb/images/chickenparmstuffedpeppers1-1519936991.jpg?crop=1.00xw:0.752xh;0,0.106xh&resize=980:*'),
     new Recipe('Veg burger', 'Healthy veggy', 'https://www.contentednesscooking.com/wp-content/uploads/2015/12/Veggie-Burger-with-Cauliflower-1.jpg')
  ];
*/
   recipe: Recipe[];
  @Output() recipe1ItemClicked = new EventEmitter<Recipe>();

  constructor(private recipeServ: RecipeService) {  this.recipe = this.recipeServ.getRecipe(); }

  ngOnInit() {
  }

  recipeItemClicked(r: Recipe) {

  }

  recipeClicked(r: Recipe) {
    console.log(r.name);
    this.recipe1ItemClicked.emit(r);
  }
}
