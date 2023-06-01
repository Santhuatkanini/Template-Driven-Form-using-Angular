  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { IEmployee } from './employee';

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {

    // private _url:string="/assets/data/employee.json"

    private _url:string="https://localhost:44300/api/Student"


    constructor(private http:HttpClient) { }

    getEmployees() : Observable<IEmployee[]> {

      return this.http.get<IEmployee[]>(this._url)
    
      }


      addEmployee(employee: IEmployee): Observable<any> {
        return this.http.post(this._url, employee);
      }





    
    }
    

  // putEmployees() : Observable<IEmployee[]> {

      //   return this.http.get<IEmployee[]>(this._url)
      
      //   }
      