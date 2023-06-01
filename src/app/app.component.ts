import { Component } from '@angular/core';
import { WATCH_LIST } from './DATA';
import {Title } from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  watchList = WATCH_LIST
  maxItems = 4;

  constructor( private title: Title) {
    this.title.setTitle('Flop Watch List');
  }

  moveItemUp(index){
  let currIndex = this.watchList[index];
  this.watchList[index] = this.watchList[index-1];
  this.watchList[index-1] = currIndex;
 
  }
  moveItemDown(index){
  let currIndex = this.watchList[index];
  this.watchList[index] = this.watchList[index+1];
  this.watchList[index+1] = currIndex;
  }

  onClick(){
   this.maxItems = this.watchList.length;
  }
}
