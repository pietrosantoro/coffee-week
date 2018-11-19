import { Component, OnInit } from '@angular/core';
import { IEmployee, User, Pair, Name } from '../content/paring/employees';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public employees: IEmployee[];
  public users: User[];
  public pairs: Pair[] = [];
  public showHome = true;
  public showEmployees = false;
  public showPair = false;
  public randomCreated = false;

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data;
        this.users = this.employees["users"];
      });
  }

  home() {
    this.showHome = true;
    this.showEmployees = false;
    this.showPair = false;
  }

  list_employees() {
    this.showEmployees = true;
    this.showHome = false;
    this.showPair = false;
  }

  list_giv_rec() {
    this.showPair = true;
    this.showEmployees = false;
    this.showHome = false;
  }

  public getRandom() {
    if(this.users){                                       //random function starts when user array is filled
      this.showPair = true;
      this.randomCreated = true;                          
      this.showHome = false;
      this.showEmployees = false;
      let eng_users: User[] = [];
      let eng_index = 0;
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].department == "engineering") {   //just eng users take part to the coffee week
          eng_users[eng_index] = this.users[i];
          eng_index++;
        }
      }
      let eng_users_initial_length = eng_users.length;
      let first = eng_users.shift();
      let giver_temp = first;
      let receiver_temp;
      for (var i = 0; i < (eng_users_initial_length - 1); i++) {
        var random = Math.floor(Math.random() * (eng_users.length - 1));  //random is the random element between 0 and eng_users.length - 1
        receiver_temp = eng_users[random];                                //receiver_temp is the random element
        this.pairs[i] = { giver: giver_temp, receiver: receiver_temp };   //set the pairs array
        giver_temp = receiver_temp;                                       //old receiver becomes the new giver
        eng_users.splice(random, 1);                                      //delete the random element

      }
      this.pairs[eng_users_initial_length - 1] = { giver: giver_temp, receiver: first };    //the last element in the array becomes the last giver and the first giver becomes the last receiver
    }
  }

}
