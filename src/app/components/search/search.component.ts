import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  @Input() filterNameChild: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    console.log(this.filterNameChild);

  }

  ngOnInit(): void {
  }

}
