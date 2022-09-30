import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  // creates an array with the sides of the triangle to be calculated
  triangleSides: any[] = ['Selecione para continuar', 'Cateto Oposto', 'Cateto Adjacente', 'Hipotenusa'];

  selected: string = " ";
  valueHypotenuse: number = 0;
  valueOppositeCatheter: number = 0;
  valueAdjacentCathet: number = 0;
  hypotenuse?: number;
  oppositeCcatheter?: number;
  adjacentCathet?: number;

  form: FormGroup;

  // Create the form
  constructor(fb: FormBuilder, private route: Router) {
    this.form = fb.group({
      oppositeCatheter: ["", [Validators.required]],
      adjacentCathet: ["", [Validators.required]],
      hypotenuse: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.selected = this.triangleSides[0];
    this.disabledInput();
  }

  // Enables and disables form fields to be calculated
  disabledInput() {
    // this.selected == "Hipotenusa" ? this.form.get('hypotenuse')?.disable() : this.selected == "Cateto Oposto" ? this.form.get('adjacentCathet')?.disable() : this.form.get('oppositeCatheter')?.disable();
    switch (this.selected) {

      case "Hipotenusa":
        this.form.get('hypotenuse')?.disable();
        this.form.get('oppositeCatheter')?.enable();
        this.form.get('adjacentCathet')?.enable();
        break;
      case "Cateto Adjacente":
        this.form.get('adjacentCathet')?.disable();
        this.form.get('hypotenuse')?.enable();
        this.form.get('oppositeCatheter')?.enable();
        break;
      case "Cateto Oposto":
        this.form.get('oppositeCatheter')?.disable();
        this.form.get('adjacentCathet')?.enable();
        this.form.get('hypotenuse')?.enable();
        break;

      case "Selecione para continuar":
        this.form.get('oppositeCatheter')?.disable();
        this.form.get('adjacentCathet')?.disable();
        this.form.get('hypotenuse')?.disable();
        break;
      }

    this.form.reset();
  }

  // performs the calculation of the entered values
  calculate() {
    if (this.selected === "Hipotenusa") {
      this.calcHypotenuse();
      console.log("chamou o hipotenusa");

    } else if (this.selected === "Cateto Adjacente") {
      this.calcAdjacentCathet();
      console.log("chamou o adjacente");
    } else if (this.selected === "Cateto Oposto") {
      this.calcOppositeCcatheter();
      console.log("chamou o oposto");
    }
  }

  // calculates hypotenuse
  calcHypotenuse() {
    this.valueOppositeCatheter = this.form.get('oppositeCatheter')?.value;
    this.valueAdjacentCathet = this.form.get('adjacentCathet')?.value;
    this.hypotenuse = Number(Math.hypot(this.valueAdjacentCathet, this.valueOppositeCatheter).toFixed(2));
  }

  // calculates the adjacent catet
  calcAdjacentCathet() {
    this.valueHypotenuse = this.form.get('hypotenuse')?.value;
    this.valueOppositeCatheter = this.form.get('oppositeCatheter')?.value;
    if (this.valueOppositeCatheter > this.valueHypotenuse) {
      alert("Em um triângulo retângulo o cateto não pode ser maior que a hipotenusa. Informe um valor diferente :).");
    } else {
      this.adjacentCathet = ((this.valueHypotenuse * this.valueHypotenuse)) - ((this.valueOppositeCatheter * this.valueOppositeCatheter));
      this.adjacentCathet = Number(Math.sqrt(this.adjacentCathet).toFixed(3));
    }
  }

  // calculates the opposite catheter
  calcOppositeCcatheter() {
    this.valueAdjacentCathet = this.form.get('adjacentCathet')?.value;
    this.valueHypotenuse = this.form.get('hypotenuse')?.value;
    if (this.valueAdjacentCathet > this.valueHypotenuse) {
      alert("Em um triângulo retângulo o cateto não pode ser maior que a hipotenusa. Informe um valor diferente :).");
    } else {
      this.oppositeCcatheter = Number((Math.pow(this.valueHypotenuse, 2) - Math.pow(this.valueAdjacentCathet, 2)).toFixed(2));
      this.oppositeCcatheter = Number(Math.sqrt(this.oppositeCcatheter).toFixed(2));
      console.log("verificando o cateter oposto", this.oppositeCcatheter);
    }
  }

  //clears the form
  clean(){
    this.form.reset();
  }

  // returns to the home page
  back() {
    this.route.navigate(['/'])
  }

}
