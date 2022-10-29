import { Component, OnInit } from "@angular/core";

@Component({
	selector: "temperature-converter",
	templateUrl: "./temperatureConverter.component.html",
	styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
	celcius: string;
	fahrenheit: string;

	constructor() {
		this.celcius = "";
		this.fahrenheit = "";
	}

	ngOnInit() {}

	changeTemparutue(value, type) {
		switch (type) {
			case "c":
				this.fahrenheit = `${((Number(value) * 9) / 5 + 32).toFixed(1)}`;
				break;

			case "f":
				this.celcius = `${(((Number(value) - 32) * 5) / 9).toFixed(1)}`;
				break;
		}
	}
}
