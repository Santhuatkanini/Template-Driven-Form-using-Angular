import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormComponentComponent } from './form-component/form-component.component';
import { LogComponent } from './log/log.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'



@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    EmployeelistComponent,
    FormComponentComponent,
    LogComponent,
    AddEmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
