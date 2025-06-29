import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  userUrl: string = ``
  constructor(
    private _http: HttpClient
  ) { }


}
