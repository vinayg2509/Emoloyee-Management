import { removeAriaReferencedId } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  //to create employee object in json server
  addEmployee(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/employees', data);
  }
  // To get the list of all the employee
  getAllEmployee(): Observable<any> {
    return this.http.get('http://localhost:3000/employees')
  }

  // To delete employee by id
  deleteEmployeeById(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/employees/${id}`)
  }
}
