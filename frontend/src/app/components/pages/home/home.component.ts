import { Component } from '@angular/core';
import { Food } from 'shared/models/foods';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'shared/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[]=[];

  constructor(private _activateRoute:ActivatedRoute,
     private _foodService:FoodService){
     _activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods = this._foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else
      this.foods = _foodService.getFoods();
     });
  }
}
