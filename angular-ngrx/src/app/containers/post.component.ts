import {Component, OnInit} from '@angular/core';

import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'youtube-post',
  template: ``,
  styles: [``]
})

export class PostComponent implements OnInit {
 
  isAlive = true;
  loading = false;
  error = false;

  constructor() {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {}
  }