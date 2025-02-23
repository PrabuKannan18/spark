import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./spark/spark.routes').then((m) => m.routes),
  },
  {
    path: 'downloads',
    loadComponent: () => import('./downloads/downloads.page').then( m => m.DownloadsPage)
  },
];
