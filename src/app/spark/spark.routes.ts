import { Routes } from '@angular/router';
import { SparkPage } from './spark.page';

export const routes: Routes = [
  {
    path: 'spark',
    component: SparkPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'artist',
        loadComponent: () =>
          import('../artist/artist.page').then((m) => m.ArtistPage),
      },
      {
        path: 'favourite',
        loadComponent: () =>
          import('../favourite/favourite.page').then((m) => m.FavouritePage),
      },
      {
        path: 'downloads',
        loadComponent: () =>
          import('../downloads/downloads.page').then((m) => m.DownloadsPage),
      },
      {
        path: '',
        redirectTo: '/spark/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/spark/home',
    pathMatch: 'full',
  },
];
