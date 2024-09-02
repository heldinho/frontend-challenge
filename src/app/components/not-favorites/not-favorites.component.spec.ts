import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFavoritesComponent } from './not-favorites.component';

describe('NotFavoritesComponent', () => {
  let component: NotFavoritesComponent;
  let fixture: ComponentFixture<NotFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFavoritesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
