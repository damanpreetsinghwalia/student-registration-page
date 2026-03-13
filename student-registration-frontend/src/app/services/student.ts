import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  course: string;
  address: string;
  registeredAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly apiUrl = 'http://localhost:5000/api/students';

  constructor(private http: HttpClient) {}

  registerStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}
