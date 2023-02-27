import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concrete-calculator';
  calculator = new FormGroup({
    type: new FormControl('concrete', Validators.required),
    volume: new FormControl(250, Validators.required),
  });



  result: { volume: number, cement: number, sand: number, aggregate: number, water: number } = {
    volume: 0,
    cement: 0,
    sand: 0,
    aggregate: 0,
    water: 0
  };

  constructor() {
    this.calculator.valueChanges.subscribe(() => {
      this.calculate();
    });
    this.calculate();

  }

  calculate() {
    const { type, volume } = this.calculator.value;
    if (!volume || volume <= 0) return;
    if (type === "concrete") {
      this.result = {
        volume,
        aggregate: volume * .5,
        cement: volume * .15,
        sand: volume * 0.25,
        water: volume * 0.1
      }
    } else if (type === "mortar") {
      this.result = {
        volume,
        aggregate: volume * 0,
        cement: volume * .15,
        sand: volume * 0.75,
        water: volume * 0.1
      }
    } else {
      this.result = {
        volume,
        aggregate: volume * 150 / 250,
        cement: volume * 0.1,
        sand: volume * 0,
        water: volume * 75 / 250
      }
    }
  }

  onSubmit() {
    console.log(this.calculator.value);
  }

}
