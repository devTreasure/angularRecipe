import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list-service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() IngredietItemAdd =  new EventEmitter<Ingredients>();

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
  }

  addItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {

    /*
    event.stopPropagation();
    console.log(nameInput.value);
    console.log(amountInput.value);



    this.IngredietItemAdd.emit(ing);  */
    const amt =  Number(amountInput.value);
    const ing = new Ingredients( nameInput.value , amt);
    this.slService.addIngredient(ing);
  }

//  const amnt = Number(amountInput.value);
//  let ing = new Ingredients(nameInput.value, amnt);

}
