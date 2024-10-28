import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'youtube-users',
  template: ``,
  styles: [``]
})

export class UsersComponent implements OnInit, OnDestroy {
  error = false;
  isAlive = true;

  constructor() {
  }

  ngOnInit() {
    this.fetchData();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
  }

  tryAgain() {
  }

  addUser() {
  }
}
