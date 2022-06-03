import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  urlRoot: string;
  //We'll need to inject 2 services: HTTP and Base url
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;
  }

  searchMoviesTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.urlRoot + "movies/SearchByTitle/" + title);
  }

  createMovie(newMovie: Movie): Observable<Movie> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<Movie>(this.urlRoot + "movies/CreateMovie/",
      JSON.stringify(newMovie), { headers: headers });
  }
}
