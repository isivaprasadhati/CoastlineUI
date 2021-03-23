import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatershopComponent } from './watershop.component';

describe('WatershopComponent', () => {
  let component: WatershopComponent;
  let fixture: ComponentFixture<WatershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
