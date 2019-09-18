import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {convertMetaToOutput} from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
 // @output() OnServerAdded = new EventEmitter<{}>();
 @Output() shoppingmenu = new EventEmitter<string>();
 @Output() recipeMenu = new  EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(recipe: string) {
     this.recipeMenu.emit(recipe);
  }

  onShoppingClick(shoppingList: string) {
    this.shoppingmenu.emit(shoppingList);
  }
}
