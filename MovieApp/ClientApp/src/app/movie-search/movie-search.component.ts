import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers: [MovieService]
})
export class MovieSearchComponent implements OnInit {

  searchTerm: string = "";
  results: Movie[] = [];
  title: string = "";
  runTime!: number;
  year!: number;
  description: string = "";
  leadActor: string = "";

  constructor(private movieDb: MovieService) { }

  ngOnInit(): void {
  }

  searchMovies(): void {
    this.movieDb.searchMoviesTitle(this.searchTerm).subscribe(
      (response) => {
        this.results = response;
      });
  }

  createMovie(title: string, runTime: number, year: number, description: string, leadActor: string): void {
    let newMovie: Movie = new Movie(0, title, runTime, year, description, leadActor);
    
    this.movieDb.createMovie(newMovie).subscribe();
    this.searchTerm = "";
    this.title = "";
    let resetNum!: number;
    this.runTime = resetNum; 
    this.year = resetNum;
    this.description = "";
    this.leadActor = "";
  }

}
