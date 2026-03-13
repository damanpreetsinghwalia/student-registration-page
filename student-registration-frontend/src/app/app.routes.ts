import { Routes } from '@angular/router';
import { RegistrationForm } from './components/registration-form/registration-form';
import { Success } from './components/success/success';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegistrationForm },
  { path: 'success', component: Success },
  { path: '**', redirectTo: 'register' }
];
