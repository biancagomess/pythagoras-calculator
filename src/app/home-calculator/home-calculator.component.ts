import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-calculator',
  templateUrl: './home-calculator.component.html',
  styleUrls: ['./home-calculator.component.scss']
})
export class HomeCalculatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Redirects to the calculator page according to the route file
  goToCalculator(){
   this.router.navigate(['/calculator']);
  }

}
