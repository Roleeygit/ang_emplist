import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit 
{

  education : string[] =
  [
    "Matric",
    "Diploma",
    "Intermediate",
    "Graduate",
    "Post Graduate"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
