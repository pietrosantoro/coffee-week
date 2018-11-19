import { Component, OnInit, Input } from '@angular/core';
import { User, Pair } from './employees';

@Component({
  selector: 'app-paring',
  templateUrl: './paring.component.html',
  styleUrls: ['./paring.component.css']
})
export class ParingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() user: User;
  @Input() pair: Pair;
  @Input() showEmployees: boolean;
  @Input() showPair : boolean;
}
