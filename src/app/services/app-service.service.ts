import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as link from 'src/app/constant/links';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getLocations() {
    return this.http.get(link.GetLocations);
  }
  getLevels() {
    return this.http.get(link.GetLevels);
  }
}
