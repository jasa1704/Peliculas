import { Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { ListMovieComponent } from './pages/list-movie/list-movie.component';
import { DetailMovieComponent } from './pages/detail-movie/detail-movie.component';

export const moviesRoutes: Routes = [
    {
        path: 'peliculas', component: MoviesComponent, children: [
            { path: '', component: ListMovieComponent },
            { path: ':id', component: DetailMovieComponent }
        ]
    }
];