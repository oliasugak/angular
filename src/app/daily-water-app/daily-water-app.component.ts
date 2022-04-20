import { Component, OnInit } from '@angular/core';
import { defaultMeals } from '../defaultMeals';
import { Meal } from '../typedefs';

let ID_COUNTER = 4;

@Component({
  selector: 'app-daily-water-app',
  templateUrl: './daily-water-app.component.html',
  styleUrls: ['./daily-water-app.component.css']
})
export class DailyWaterAppComponent implements OnInit {

  dailyRate: number = 1650;
  meals: Meal[] = defaultMeals;

  constructor() { }

  ngOnInit(): void {}

  updateDailyRate(updatedRate: number) {
    this.dailyRate = updatedRate;
  }

  addMeal(amount: number) {
    const meal = {
      id: ID_COUNTER++,
      amount,
      date: new Date(),
    };

    this.meals = [...this.meals, meal];
  }

  deleteMeal(id: number) {
    this.meals = this.meals.filter((meal) => meal.id !== id);
  }
}
