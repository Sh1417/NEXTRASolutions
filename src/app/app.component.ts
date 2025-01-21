import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nextra-solutions';

  // Toggle the mobile navbar
  toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('active');
  }
}
