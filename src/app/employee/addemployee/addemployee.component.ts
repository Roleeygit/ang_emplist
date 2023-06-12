import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit 
{

  empForm: FormGroup;

  education : string[] =
  [
    "Matric",
    "Diploma",
    "Intermediate",
    "Graduate",
    "Post Graduate"
  ];

  constructor(private _fb: FormBuilder)
  {
    this.empForm = this._fb.group
    ({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  onFormSubmit()
  {
    if(this.empForm.valid)
    {
      console.log(this.empForm.value);
    }
  }

  ngOnInit(): void {
  }

}
