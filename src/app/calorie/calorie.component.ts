import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { API_URL } from '../../environment/environment';
import { CalorieService } from './services/calorie.service';
import { DateService } from './services/date.service';
import { AsyncPipe } from '@angular/common';

export type Calorie = {
  weekNumber: number;
  weeklyCalories: number;
  caloriesLeft: number;
  weekStartDate: string;
};

@Component({
  standalone: true,
  templateUrl: `./calorie.component.html`,
  styleUrls: [`./calorie.component.scss`],
  imports: [AsyncPipe],
  providers: [CalorieService, DateService],
})
export class CalorieComponent implements OnInit {
  public vm$: Observable<Calorie>;

  constructor() {
    this.calories = toSignal(this.calorieService.getWeeklyCalorieTotal(1));
  }

  private httpClient = inject<HttpClient>(HttpClient);
  private calorieService = inject<CalorieService>(CalorieService);
  private dateService = inject<DateService>(DateService);

  public calories: Signal<number | undefined>;

  public ngOnInit(): void {
    this.httpClient.get<Calorie>(`${API_URL}calories/1`).subscribe(console.log);
  }
}
