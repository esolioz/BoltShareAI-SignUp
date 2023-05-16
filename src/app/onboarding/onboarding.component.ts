import { CdkStepper } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [''],
    email: ['', [Validators.required, Validators.email]],
  });

  /**
   * Password
   */
  formPassword = this._formBuilder.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  /**
   * Payment
   */
  formPayment = this._formBuilder.group({
    creditCardNumber: ['', Validators.required],
    creditCardExpiryDate: ['', Validators.required],
    creditCardCvcCode: ['', Validators.required],
    street: ['', Validators.required],
    postalCode: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
