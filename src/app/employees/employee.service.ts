import { Injectable } from "@angular/core";
import {Employee} from '../models/employee.model';

@Injectable()
export class EmployeeService{
    
  employees:Employee[]=[{
    id:1,
    name:'Mark',
    gender:'Male',
    contactPreference:'Email',
    email:'mark@gmail.com',
    dateOfBirth:new Date('10/25/1988'),
    department:'IT',
    isActive:true,
    photopath:'assets/images/mark.png'

  },{
    id:2,
    name:'Henry',
    gender:'Male',
    contactPreference:'Email',
    email:'henry@gmail.com',
    dateOfBirth:new Date('10/26/1975'),
    department:'Marketing',
    isActive:true,
    photopath:'assets/images/henry.png'

  },{
    id:3,
    name:'John',
    gender:'Male',
    contactPreference:'Email',
    email:'john@gmail.com',
    dateOfBirth:new Date('10/25/1988'),
    department:'Sales',
    isActive:true,
    photopath:'assets/images/john.png'

  },
];

getEmployees():Employee[]{
    return this.employees;
}


}