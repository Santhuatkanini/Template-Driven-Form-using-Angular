import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})




export class EmployeedetailsComponent implements OnInit {


  selectedOption: string='Select an option';

  def : string ="select a option"
  public employees:any []= [];

constructor(private _empService : EmployeeService){}

ngOnInit(): void {
   this._empService.getEmployees()

  .subscribe(data => this.employees=data)


}


}
