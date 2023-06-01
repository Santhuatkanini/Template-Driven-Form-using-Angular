import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit{
  
public employees:any []= [];
  constructor(private _empService : EmployeeService){}
  ngOnInit(): void {


    this._empService.getEmployees()

  .subscribe(data => this.employees=data)



  }




}








// employees : any[] = [
  //   { id: 1, name: "John Doe", degree: "Bachelor's" },
  //   { id: 2, name: "Jane Smith", degree: "Master's" },
  //   { id: 3, name: "Mike Johnson", degree: "Ph.D." },
  //   { id: 4, name: "Emily Williams", degree: "Bachelor's" }
  // ];