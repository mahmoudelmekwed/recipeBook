import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedOne = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('A test' , 'this is a test', 'https://img.freepik.com/free-vector/hand-drawn-recipe-book-template_52683-81934.jpg?w=740&t=st=1671797134~exp=1671797734~hmac=d968bf72d8013f3bf20a0b9d0cdc0bd82e4c0f3c5d20a57375d77953b1d46614')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe : Recipe){
    this.selectedOne.emit(recipe);
  }

}
