import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDComponent } from './hd.component';

describe('HDComponent', () => {
  let component: HDComponent;
  let fixture: ComponentFixture<HDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
