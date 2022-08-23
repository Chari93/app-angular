import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacReactiveComponent } from './contac-reactive.component';

describe('ContacReactiveComponent', () => {
  let component: ContacReactiveComponent;
  let fixture: ComponentFixture<ContacReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
