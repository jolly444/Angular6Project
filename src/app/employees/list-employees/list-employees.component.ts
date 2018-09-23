import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import {EmployeeService} from '../../employees/employee.service';
@Component({
  
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[];
  constructor(private empService:EmployeeService) { }

  ngOnInit() { 

    this.employees=this.empService.getEmployees();
  }

}
