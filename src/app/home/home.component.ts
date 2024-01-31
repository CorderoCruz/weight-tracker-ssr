import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: `./home.component.html`,
  styleUrls: [`./home.component.scss`],
  imports: [TitleCasePipe, RouterLink],
})
export class HomeComponent {
  public links: string[] = ['calorie'];
}
