import { Component,OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { EmployeeService } from '../../../services/employee.service';

import { Employee } from '../../../models/employee';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({

selector:'app-employee-list',

standalone:true,

imports:[
CommonModule,
RouterLink,
FormsModule
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
delete(id:number)
{

Swal.fire({

title:'Delete Employee?',

text:'Are you sure?',

icon:'warning',

showCancelButton:true,

confirmButtonText:'Yes'

})
.then(result=>{

if(result.isConfirmed)
{

this.service.deleteEmployee(id)
.subscribe(()=>{

Swal.fire(

'Deleted',

'Employee Deleted Successfully',

'success'

);

this.loadEmployees();

});

}

});

}
searchText='';

search()
{
this.service.searchEmployee({

searchText:this.searchText,
departmentId:null,
pageNumber:1,
pageSize:10,
sortBy:"EmployeeName",
isAscending:true

})
.subscribe(res=>{

this.employees=res.data;

});
}

}