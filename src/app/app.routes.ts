import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { DepartmentFormComponent } from './components/department/department-form/department-form.component';

import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';

export const routes: Routes = [

    {
        path:'',
        component:HomeComponent
    },

    {
        path:'departments',
        component:DepartmentListComponent
    },

    {
        path:'department/add',
        component:DepartmentFormComponent
    },

    {
        path:'department/edit/:id',
        component:DepartmentFormComponent
    },

    {
        path:'employees',
        component:EmployeeListComponent
    },

    {
        path:'employee/add',
        component:EmployeeFormComponent
    },

    {
        path:'employee/edit/:id',
        component:EmployeeFormComponent
    }
];