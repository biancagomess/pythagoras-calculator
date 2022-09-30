import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeCalculatorComponent } from './home-calculator.component';

describe('HomeCalculatorComponent', () => {
  let component: HomeCalculatorComponent;
  let fixture: ComponentFixture<HomeCalculatorComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ HomeCalculatorComponent ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('goTo', () => {
    spyOn(router, 'navigate');
     expect(router.navigate).toHaveBeenCalledWith(['/calculator']);
  })
});
