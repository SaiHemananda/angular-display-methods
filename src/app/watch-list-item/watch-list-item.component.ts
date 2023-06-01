import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styles: [ 'i {cursor:pointer}' ]
})
export class WatchListItemComponent  {
  @Input() item;
  @Input() isItFirst;
  @Input() isItLast;
 
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();

  ngOnInit() {
  }

  onGoDown(){
    this.down.emit();
  }
  onGoUp(){
    this.up.emit();
  }
  

}