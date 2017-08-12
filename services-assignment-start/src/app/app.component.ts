import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
   count : number;

   constructor(private userService: UserService) {}

   ngOnInit() {
     this.userService.counterUpdated.subscribe((count : number) => {
      this.count = count;
     });
   }

}
