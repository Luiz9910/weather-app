import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-wather-card',
  templateUrl: './wather-card.component.html',
  styleUrls: []
})
export class WatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
