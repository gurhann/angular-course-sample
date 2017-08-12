import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "";
  mustEnable = false;

  setEnabled(event: Event) {
    if (this.userName.trim() !== "") {
      this.mustEnable = true;
    } else {
      this.mustEnable = false;
    }
    console.log(this.mustEnable);
  }

  resetuserName() {
    this.userName = "";
    console.log("asdas");
  }
}
