import { Component, OnInit, Input } from '@angular/core';
import { User, Pair } from './paring/employees';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

  @Input() user: User;
  @Input() pair: Pair;
  @Input() showEmployees : boolean;
  @Input() showHome : boolean;
  @Input() showPair : boolean;
  @Input() randomCreated : boolean;
}
