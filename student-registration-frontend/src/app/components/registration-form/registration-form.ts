import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService, Student } from '../../services/student';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm {
  registrationForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-().]{7,20}$/)]],
      dateOfBirth: ['', [Validators.required]],
      course: ['', [Validators.required, Validators.maxLength(200)]],
      address: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const student: Student = this.registrationForm.value;

    this.studentService.registerStudent(student).subscribe({
      next: (registeredStudent) => {
        this.isSubmitting = false;
        this.router.navigate(['/success'], { state: { student: registeredStudent } });
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = err?.error?.title || 'Registration failed. Please try again.';
      }
    });
  }
}
