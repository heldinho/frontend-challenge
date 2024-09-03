import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heart',
  standalone: true,
  imports: [],
  templateUrl: './heart.component.svg',
  styleUrl: './heart.component.scss',
})
export class HeartComponent {
  @Input() fillColor = '#0a0a0a';
  @Input() width = 32;
  @Input() height = 32;
}
