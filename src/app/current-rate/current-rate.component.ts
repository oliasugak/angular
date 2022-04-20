import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Meal } from '../typedefs';

@Component({
  selector: 'app-current-rate',
  templateUrl: './current-rate.component.html',
  styleUrls: ['./current-rate.component.css']
})
export class CurrentRateComponent implements OnInit {

  isFormVisible: boolean = false;
  rate = new FormControl('');

  @Input() meals: Meal[] = [];
  @Input() dailyRate!: number;
  @Output() addMealEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  showForm() {
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
  }

  createMeal(amount: number) {
    this.addMealEvent.emit(amount);

    this.hideForm();
  }

  getAlreadyDrunk() {
    return this.meals.reduce((accum, meal) => (
      accum + meal.amount
    ), 0)
  }

  getAlreadyDrunkPercent() {
    const alreadyDrunk = this.meals.reduce((accum, meal) => (
      accum + meal.amount
    ), 0);

    return Math.floor(alreadyDrunk * 100 / this.dailyRate);
  }
}
