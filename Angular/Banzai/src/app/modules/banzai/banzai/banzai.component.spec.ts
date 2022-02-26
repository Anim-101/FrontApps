import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanzaiComponent } from './banzai.component';

describe('BanzaiComponent', () => {
  let component: BanzaiComponent;
  let fixture: ComponentFixture<BanzaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanzaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanzaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
