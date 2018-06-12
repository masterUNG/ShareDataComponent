import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  // Explicit
  @Input() nameFromParrent: string;
  @Input() numberFromParrent: number;

  @Input() nameInputFromParrent: string;


  numberChildInt = 0;
  colorChild = '#ff2621';

  @Output() eventIncreaseChild = new EventEmitter();

  onClickIncreaseNumberChild() {
    this.numberChildInt = this.numberChildInt + 1;
    this.eventIncreaseChild.emit(this.numberChildInt);
  }

  constructor() { }

  ngOnInit() {
  }

}
