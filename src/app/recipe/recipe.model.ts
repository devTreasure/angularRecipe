import {Ingredients} from '../shared/ingredients.model';

export class Recipe {

 public name: string;
 public description: string;
 public imagepath: string;
 public ingredient: Ingredients[] ;


  constructor(name: string, description: string, imagepath: string, ingredients: Ingredients[]) {
    this.name = name;
    this.description = description;
    this.imagepath = imagepath ;
    this.ingredient = ingredients;
  }


}

