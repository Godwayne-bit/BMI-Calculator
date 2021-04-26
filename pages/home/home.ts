import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  PowerConsumption: number;
  HoursoffUse: number;
  bmi: number; 
  bmiMessage: string;
calculateBMI() {
  this.bmi = this.weight / (this.PowerConsumption * this.PowerConsumption);
  this.bmi = parseFloat(this.bmi.toFixed(2));

  if (this.bmi < 18.5) {
    this.bmiMessage = "Underweight";
  } else if (this.bmi > 18.5 && this.bmi < 25) {
    this.bmiMessage = "Normal";
  } else if (this.bmi >25 && this.bmi < 30) {
    this.bmiMessage = "Overweight";
  } else {
    this.bmiMessage = "Obese";
  }

}
}
