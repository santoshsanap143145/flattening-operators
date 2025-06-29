import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../models/users.model';
import { Ipost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = `https://jsonplaceholder.typicode.com`
  userUrl: string = `https://jsonplaceholder.typicode.com/users`;
  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<Iuser[]> {
    return this._http.get<Iuser[]>(this.userUrl);
  }

  getAllPostsOfUser(userId: number): Observable<Ipost[]>{
    return this._http.get<Ipost[]>(`${this.baseUrl}/posts?userId=${userId}`)
  }
}
