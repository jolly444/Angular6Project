import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DepartMent} from '../models/department.model';
import {Employee} from '../models/employee.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  dateOfBirth:Date=new Date(2018,0,30);
previewPhoto=false;
datePickerConfig:Partial<BsDatepickerConfig>;
  departments:DepartMent[]=[{
    id:1,name:'HelpDesk'
  },{
    id:2,name:'HR'
  },{
    id:3,name:'IT'
  },{
    id:4,name:'Payroll'
  }]

  employee:Employee={
    id:null,
    name:null,
    gender:null,
    email:'',
    phoneNumber:null,
    contactPreference:null,
    dateOfBirth:null,
    department:'-1',
    isActive:null,
    photopath:null
  };
  constructor() { this.datePickerConfig=Object.assign({},
    {containerClass:'theme-dark-blue',
    showWeekNumbers:true,
    minDate:new Date(2018,0,1),
    maxDate:new Date(2018,12,31),
    dateInputFormat:'DD/MM/YYYY'
  })}

  ngOnInit() {
  }

  saveEmployee(empForm:NgForm):void{

    console.log(empForm.value);
  }

  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }
  

}
