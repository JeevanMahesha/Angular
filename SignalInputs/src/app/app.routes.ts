import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'route-parameters/:userId',
    loadComponent: () =>
      import('./route-parameters/route-parameters.component'),
  },
];
