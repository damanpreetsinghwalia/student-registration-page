import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Student } from '../../services/student';

@Component({
  selector: 'app-success',
  imports: [CommonModule, RouterLink],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success implements OnInit {
  student: Student | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { student: Student } | undefined;
    if (state?.student) {
      this.student = state.student;
    } else {
      // If navigated directly without state, still show success message
      const historyState = history.state as { student?: Student };
      this.student = historyState?.student ?? null;
    }
  }
}
