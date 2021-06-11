import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientiComponent } from './clienti.component';

describe('ClientiComponent', () => {
  let component: ClientiComponent;
  let fixture: ComponentFixture<ClientiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
