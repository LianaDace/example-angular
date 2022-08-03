import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

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
      subscribe: true,
      country: 'EE'


    })
  }
    submitForm(): void {
      console.log(this.registrationForm.value)
  }

}
