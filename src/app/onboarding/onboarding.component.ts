import { CdkStepper } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../models/user';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
  @ViewChild('bsCdkStepper') bsCdkStepper!: CdkStepper;

  userDetails = {} as IUser;

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

  onPreview(): void {
    this.formUserDetails.patchValue({
      username: this.formUserDetails.get('email')?.value,
    });

    this.userDetails = {
      firstName: this.formUserDetails.get('firstName')?.value || '',
      lastName: this.formUserDetails.get('lastName')?.value || '',
      email: this.formUserDetails.get('email')?.value || '',
      username: this.formUserDetails.get('username')?.value || '',
      address: {
        street: this.formPayment.get('street')?.value || '',
        postalCode: parseInt(
          this.formPayment.get('postalCode')?.value || '',
          10
        ),
        city: this.formPayment.get('city')?.value || '',
        country: this.formPayment.get('country')?.value || '',
      },
    };
  }
}
