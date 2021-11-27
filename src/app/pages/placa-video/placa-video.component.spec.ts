import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaVideoComponent } from './placa-video.component';

describe('PlacaVideoComponent', () => {
  let component: PlacaVideoComponent;
  let fixture: ComponentFixture<PlacaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacaVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
