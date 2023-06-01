import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  


  employee: IEmployee = {
  
    sname: '',
    specialization: ''
  };


  constructor(private employeeService: EmployeeService) {}

  

  addEmployee(): void {
    this.employeeService.addEmployee(this.employee)
      .subscribe(
        response => {
          console.log('Employee added successfully!', response);
          // Reset the employee object or perform any other actions
          this.employee = {
           
            sname: '',
            specialization: ''
          };
        },
        error => {
          console.error('Error adding employee:', error);
        }
      );

// window.location.reload();

     
  }

}
