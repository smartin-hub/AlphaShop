import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoclientiComponent } from './infoclienti.component';

describe('InfoclientiComponent', () => {
  let component: InfoclientiComponent;
  let fixture: ComponentFixture<InfoclientiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoclientiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoclientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
