import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDatas } from 'src/app/models/interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = "97d78ed3b6b0a3a23f4a0b222adc5945";

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
