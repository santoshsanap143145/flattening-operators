import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, fromEvent, switchMap, tap } from 'rxjs';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-swith-map-tmdb',
  templateUrl: './swith-map-tmdb.component.html',
  styleUrls: ['./swith-map-tmdb.component.scss'],
})
export class SwithMapTmdbComponent implements OnInit {
  // @ViewChild('searchMovie') searchMovie!: ElementRef;
  searchForm!: FormGroup;
  movieArr: Array<any> = [];
  imgUrl = 'https://image.tmdb.org/t/p/w300';
  constructor(private _movieService: TmdbService) {}

  ngOnInit(): void {
    // console.log(this.searchMovie);
    this.createForm();

    // this.searchForm.get('searchMovie')?.valueChanges.subscribe((val) => {
    //   console.log(val);
    //   this._movieService.searchMovie(val).subscribe((movies: any) => {
    //     console.log(movies);
    //     this.movieArr = movies;
    //   });
    // });

    this.searchForm.get('searchMovie')?.valueChanges
              .pipe(
                // tap(() => {
                //   this.movieArr = []
                // }),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap(val => {
                  return this._movieService.searchMovie(val)
                })
              )
              .subscribe(movies => {
                console.log(movies);
                this.movieArr = movies;
              })
  }

  createForm() {
    this.searchForm = new FormGroup({
      searchMovie: new FormControl(null),
    });
  }

  // ngAfterViewInit() {
  //   console.log(this.searchMovie);

  //   fromEvent(this.searchMovie.nativeElement, 'keyup').subscribe((eve: any) => {
  //     console.log(eve.target.value);
  //   });
  // }
}
