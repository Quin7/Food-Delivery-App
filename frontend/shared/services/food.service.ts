import { Injectable } from '@angular/core';
import { Food } from 'shared/models/foods';
import { sample_foods } from 'shared/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoods():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getFoods().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
