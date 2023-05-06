import { CdkStepper } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
  @ViewChild('bsCdkStepper') bsCdkStepper!: CdkStepper;
  /**
   * User details
   */
  formUserDetails = this._formBuilder.group({
    firstName: [''],
    lastName: [''],
    username: [''],
    email: [''],
  });

  /**
   * Password
   */
  formPassword = this._formBuilder.group({
    password: [''],
    confirmPassword: [''],
  });

  /**
   * Payment
   */
  formPayment = this._formBuilder.group({
    creditCardNumber: [''],
    creditCardExpiryDate: [''],
    creditCardCvvCode: [''],
    street: [''],
    postalCode: [''],
    city: [''],
    country: [''],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
