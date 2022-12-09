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
    new Recipe('A test' , 'this is a test', 'https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe : Recipe){
    this.selectedOne.emit(recipe);
  }

}
