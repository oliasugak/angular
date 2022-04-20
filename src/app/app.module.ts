import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DailyWaterAppComponent } from './daily-water-app/daily-water-app.component';
import { DailyRateComponent } from './daily-rate/daily-rate.component';
import { CurrentRateComponent } from './current-rate/current-rate.component';
import { MealsListComponent } from './meals-list/meals-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyWaterAppComponent,
    DailyRateComponent,
    CurrentRateComponent,
    MealsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
