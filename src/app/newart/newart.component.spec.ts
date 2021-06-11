import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewartComponent } from './newart.component';

describe('NewartComponent', () => {
  let component: NewartComponent;
  let fixture: ComponentFixture<NewartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
