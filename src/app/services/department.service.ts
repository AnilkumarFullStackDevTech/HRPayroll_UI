import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiResponse } from '../models/api-response';

import { Department } from '../models/department';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private api=environment.apiUrl+'/Department';

  constructor(private http:HttpClient)
  {

  }

  getDepartments():Observable<ApiResponse<Department[]>>
  {
      return this.http.get<ApiResponse<Department[]>>(this.api);
  }

}