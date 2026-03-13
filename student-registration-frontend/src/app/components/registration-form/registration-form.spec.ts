import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { RegistrationForm } from './registration-form';

describe('RegistrationForm', () => {
  let component: RegistrationForm;
  let fixture: ComponentFixture<RegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationForm],
      providers: [provideHttpClient(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('should have a valid form when all fields are filled correctly', () => {
    component.registrationForm.setValue({
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '+1 555 000 1234',
      dateOfBirth: '1999-05-20',
      course: 'Data Science',
      address: '456 Oak Avenue, New York'
    });
    expect(component.registrationForm.valid).toBeTruthy();
  });
});
