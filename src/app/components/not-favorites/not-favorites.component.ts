import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-favorites',
  standalone: true,
  imports: [],
  templateUrl: './not-favorites.component.html',
  styleUrl: './not-favorites.component.scss',
})
export class NotFavoritesComponent {
  constructor(private _router: Router) {}

  goToHome(): void {
    this._router.navigate(['/']);
  }
}
