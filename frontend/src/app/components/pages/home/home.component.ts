import { Component } from '@angular/core';
import { Food } from 'shared/models/foods';
import { FoodService } from 'shared/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[]=[];

  constructor(private _foodService:FoodService){
    this.foods = _foodService.getFoods();
  }

}
