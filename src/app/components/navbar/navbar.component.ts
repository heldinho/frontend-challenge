import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private _router: Router) {}

  goToHome(): void {
    this._router.navigate(['/']);
  }

  goToFavorites(): void {
    this._router.navigate(['/favorites']);
  }
}
