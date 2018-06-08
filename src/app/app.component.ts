import { Component } from '@angular/core';
import {ChildcomponentComponent} from './components/childcomponent/childcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], entryComponents: [ChildcomponentComponent]
})
export class AppComponent {

  // Explicit
  nameParrentString = 'App Component';
  nameChildString = 'Child Component';

  numberParrentInt = 0;

  onClickIncreaseNumberParrent() {

    this.numberParrentInt = this.numberParrentInt + 1;

  }



} // AppComponent Class
