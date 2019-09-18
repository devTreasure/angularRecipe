import { Component } from '@angular/core';
import {Recipe} from './recipe/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  loadedFeature: string;



  recipeMenuCLicked(str1: string) {
    console.log(str1);
    this.loadedFeature = str1;
  }

  shippongMenuCLicked(str2: string) {
    console.log(str2);
    this.loadedFeature = str2;
     }

  detailedRecipe($event) {

    console.log($event);
  }



}
