import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { ApiResponse } from '../models/api-response';

import { Employee } from '../models/employee';

@Injectable({
  providedIn:'root'
})
export class EmployeeService {

  private api=environment.apiUrl+'/Employee';

  constructor(private http:HttpClient)
  {

  }

  getEmployees():Observable<ApiResponse<Employee[]>>
  {
    return this.http.get<ApiResponse<Employee[]>>(this.api);
  }
  createEmployee(employee:any)
{
   return this.http.post(this.api,employee);
}

getEmployeeById(id:number)
{
    return this.http.get<any>(`${this.api}/${id}`);
}

updateEmployee(id:number,employee:any)
{
    return this.http.put(`${this.api}/${id}`,employee);
}

deleteEmployee(id:number)
{
    return this.http.delete(`${this.api}/${id}`);
}
searchEmployee(request:any)
{
    return this.http.post<any>(this.api+"/search",request);
}
}