import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private readonly apiUrl = `https://api.themoviedb.org/3`;
  private readonly apiKey = `56e4d0dd9821f1c28f533168bf9b9307`;

  constructor(private _http: HttpClient) {}

  searchMovie(searchVal: string) {
    let Search_Url = `${this.apiUrl}/search/movie`;
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', searchVal)
      .set('language', 'en-US')
      .set('include_adult', 'false');

    return this._http.get(Search_Url, { params }).pipe(
      map((res: any) => res.results.filter((movie: any) => movie.poster_path && movie.overview)),
      catchError((err) => {
        //show msg from backend in snackbar
        return of([]);
      })
    );
  }
}
