import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabineteComponent } from './gabinete.component';

describe('GabineteComponent', () => {
  let component: GabineteComponent;
  let fixture: ComponentFixture<GabineteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabineteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GabineteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
