import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertypeProfileComponent } from './customertype-profile.component';

describe('CustomertypeProfileComponent', () => {
  let component: CustomertypeProfileComponent;
  let fixture: ComponentFixture<CustomertypeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomertypeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertypeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
