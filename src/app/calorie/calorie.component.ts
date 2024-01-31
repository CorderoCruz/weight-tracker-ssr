import { Component, OnInit, Signal, inject } from '@angular/core';
import { CalorieService } from './services/calorie.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DateService } from './services/date.service';

@Component({
  standalone: true,
  templateUrl: `./calorie.component.html`,
  styleUrls: [`./calorie.component.scss`],
  providers: [CalorieService, DateService],
})
export class CalorieComponent implements OnInit {
  private calorieService = inject<CalorieService>(CalorieService);
  private dateService = inject<DateService>(DateService);

  constructor() {
    this.calories = toSignal(this.calorieService.getWeeklyCalorieTotal(1));
  }

  public calories: Signal<number | undefined>;

  public ngOnInit(): void {}
}
