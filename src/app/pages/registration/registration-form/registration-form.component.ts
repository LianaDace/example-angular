import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(): void {
    // @ts-ignore
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: '',
      subscribe: false,
      country: 'LV'


    })
  }
  submitForm(): void {
    console.log(this.registrationForm.value)
  }
}
