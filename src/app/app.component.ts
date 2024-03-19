import { Component } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, ReactiveFormsModule, NgFor, NgIf, CurrencyPipe, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  calculate: FormGroup | any;
  wageTypeArray: string[]=["Hourly","Daily"];
  hoursInADayArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  daysInAWeekArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  daysInAMonthArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  ngOnInit() {
    this.calculate = new FormGroup({
      empname: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z\\s]{3,30}")
      ]),
      wagetype: new FormControl("", [
        Validators.required,
      ]),
      salaryAmt: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{1,5}")
      ]),
      hoursInADay: new FormControl("", [
        Validators.required,
      ]),
      daysInAWeek: new FormControl("", [
        Validators.required,
      ]),
      daysInAMonth: new FormControl("", [
        Validators.required,
      ]),
    })

  }
  ename: string = "";
  i: number = 101;
  wageType: string = "";
  salaryAmt: number = 0;
  hoursInDay: number = 0;
  daysInWeek: number = 0;
  daysInMonth: number = 0;
  empid: string = "";
  salaryForHour: number = 0;
  salaryForDay: number = 0;
  salaryForWeek: number = 0;
  salaryForMonth: number = 0;
  salaryForQuater: number = 0;
  salaryForAnnual: number = 0;
  calcul() {

    this.ename = this.calculate.value.empname;
    this.wageType = this.calculate.value.wagetype;
    this.salaryAmt = this.calculate.value.salaryAmt;
    this.hoursInDay = this.calculate.value.hoursInADay;
    this.daysInWeek = this.calculate.value.daysInAWeek;
    this.daysInMonth = this.calculate.value.daysInAMonth;
    if (this.wageType == 'Daily') {
      this.salaryForHour = this.salaryAmt / this.hoursInDay;
    } else {
      this.salaryForHour = this.salaryAmt;
    }
    this.empid = "TRA-" + this.i; this.i++;
    this.salaryForDay = this.salaryForHour * this.hoursInDay;
    this.salaryForWeek = this.salaryForDay * this.daysInWeek;
    this.salaryForMonth = this.salaryForDay * this.daysInMonth;
    this.salaryForQuater = this.salaryForMonth * 4;
    this.salaryForAnnual = this.salaryForMonth * 12;
    this.calculate.reset()
  }
 
}
