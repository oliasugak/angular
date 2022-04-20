import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getTimeString } from '../helpers';
import { Meal } from '../typedefs';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {

  @Input() meals: Meal[] = [];
  @Output() deleteMealEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteMeal(id: number) {
    this.deleteMealEvent.emit(id);
  }

  getTimeString(date: Date) {
    return getTimeString(date)
  }
}
