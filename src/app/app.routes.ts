import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calorie',
    loadChildren: () =>
      import('./calorie/calorie.routes').then((r) => r.CALORIE_ROUTES),
  },
];
