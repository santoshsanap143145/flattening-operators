import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'flattening-operators';

  ngOnInit(): void {
    from([1, 2, 3, 4]).subscribe(num => {
      console.log(num);
      
    })
  }
}
