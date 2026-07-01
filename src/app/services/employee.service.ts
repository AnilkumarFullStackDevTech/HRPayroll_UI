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

}