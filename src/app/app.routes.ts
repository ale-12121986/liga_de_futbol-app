import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'league',
    pathMatch: 'full',
  },
  {
    path: 'league',
    loadComponent: () => import('./pages/league/league.page').then( m => m.LeaguePage)
  },
];
