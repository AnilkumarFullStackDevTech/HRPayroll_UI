import { Component,OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DepartmentService } from '../../../services/department.service';

import { Department } from '../../../models/department';

@Component({

selector:'app-department-list',

standalone:true,

imports:[
CommonModule
],

templateUrl:'./department-list.component.html'

})

export class DepartmentListComponent implements OnInit
{

departments:Department[]=[];

constructor(private service:DepartmentService)
{

}

ngOnInit(): void {

this.loadDepartments();

}

loadDepartments()
{
this.service.getDepartments().subscribe(res=>{

this.departments=res.data;

});
}

}