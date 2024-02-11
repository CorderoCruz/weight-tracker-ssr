import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_URL } from '../../../environment/environment';

@Injectable()
export class CalorieService {
  private httpClient = inject<HttpClient>(HttpClient);
  public weeklyCalories: number;

  constructor() {}

  public getWeeklyCalorieTotal(weekNumber: number): Observable<number> {
    // return this.httpClient.get(
    //   `${API_URL}/weekly-macros/${weekNumber}`
    // ) as Observable<number>;
    return of(1);
  }
}
