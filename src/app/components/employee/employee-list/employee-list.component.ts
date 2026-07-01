import { Component,OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { EmployeeService } from '../../../services/employee.service';

import { Employee } from '../../../models/employee';

@Component({

selector:'app-employee-list',

standalone:true,

imports:[
CommonModule
],

templateUrl:'./employee-list.component.html'

})

export class EmployeeListComponent implements OnInit
{

employees:Employee[]=[];

constructor(private service:EmployeeService)
{

}

ngOnInit(): void {

this.loadEmployees();

}

loadEmployees()
{
this.service.getEmployees().subscribe(res=>{

this.employees=res.data;

});
}

}