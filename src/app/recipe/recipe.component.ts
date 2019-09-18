import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

   recipe: Recipe;

  ngOnInit() {
  }

  recipeItenary(r: Recipe) {
    console.log(r);
    this.recipe = r;
    console.log('inside recipecomp from recipe event emit');
  }
}
