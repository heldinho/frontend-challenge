import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heart-o',
  standalone: true,
  imports: [],
  templateUrl: './heart-o.component.svg',
  styleUrl: './heart-o.component.scss',
})
export class HeartOComponent {
  @Input() fillColor = '#fafafa';
  @Input() width = 32;
  @Input() height = 32;
}
