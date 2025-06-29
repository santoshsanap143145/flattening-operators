import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../models/users.model';
import { from, map, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-merge-map-users',
  templateUrl: './merge-map-users.component.html',
  styleUrls: ['./merge-map-users.component.scss'],
})
export class MergeMapUsersComponent implements OnInit {
  userArr: Array<Iuser> = [];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.fetchAllUser();
  }

  // fetchAllUser() {
  //   this._userService.getAllUsers().subscribe((users) => {
  //     users.forEach((user: Iuser) => {
  //       // console.log(user);

  //       //api call for posts of specific user using userId
  //       this._userService.getAllPostsOfUser(user.id).subscribe((posts) => {
  //         let obj = {
  //           ...user,
  //           postArr: posts,
  //         };
  //         this.userArr.push(obj);
  //       });
  //     });
  //   });
  // }

  fetchAllUser() {
    this._userService
      .getAllUsers()
      .pipe(
        mergeMap((users) => {
          return from(users)
        }),
        mergeMap((user: any) => {
          return this._userService.getAllPostsOfUser(user.id).pipe(
            map((posts) => {
              return {
                ...user,
                postArr: posts,
              };
            })
          );
        }),
        toArray()
      )

      .subscribe((res) => {
        console.log(res);
        this.userArr = res
      });
  }

  
}
