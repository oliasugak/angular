import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-daily-rate',
  templateUrl: './daily-rate.component.html',
  styleUrls: ['./daily-rate.component.css']
})
export class DailyRateComponent implements OnInit {

  rate = new FormControl('');
  isEditing = false;

  @Input() dailyRate!: number;
  @Output() updateDailyRateEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateDailyRate(rate: number) {
    this.updateDailyRateEvent.emit(rate);
  }

  startEditing() {
    this.isEditing = true;
  }

  endEditing() {
    this.isEditing = false;
  }

  submit() {
    this.updateDailyRate(+this.rate.value);

    this.rate.setValue('');

    this.endEditing();
  }
}
