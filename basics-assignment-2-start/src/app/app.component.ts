import { Component } from '@angular/core';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "";

  isEmptyUsername() {
    return this.username.length === 0;
  }

  onResetBtnClick() {
    this.username="";
  }
}
