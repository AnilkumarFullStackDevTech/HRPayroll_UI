import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {

  form!: FormGroup;

  departments:any[]=[];

  employeeId: number = 0;

  isEdit: boolean = false;

  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private departmentService:DepartmentService,
    private router:Router,
    private route:ActivatedRoute)
  {

  }

  ngOnInit(): void {

    this.form=this.fb.group({

      employeeName:['',Validators.required],

      email:['',Validators.required],

      salary:[0,Validators.required],

      joinDate:['',Validators.required],

      departmentId:['',Validators.required]

    });

    this.loadDepartments();
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.employeeId > 0) {
      this.isEdit = true;

      this.employeeService.getEmployeeById(this.employeeId)
        .subscribe(res => {
          this.form.patchValue(res.data);
        });
    }

  }

  loadDepartments()
  {
      this.departmentService.getDepartments().subscribe(res=>{

        this.departments=res.data;

      });
  }

  save()
{

if(this.form.invalid)
return;

if(this.isEdit)
{

this.employeeService
.updateEmployee(this.employeeId,this.form.value)
.subscribe(()=>{

alert("Employee Updated Successfully");

this.router.navigate(['/employees']);

});

}
else
{

this.employeeService
.createEmployee(this.form.value)
.subscribe(()=>{

alert("Employee Saved Successfully");

this.router.navigate(['/employees']);

});

}

}
}