import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './login.component.html',
  styleUrls:['../../style.css'],
  standalone: true // เพิ่ม standalone: true
})
export class LoginComponent {
  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
