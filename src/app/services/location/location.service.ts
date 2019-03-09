import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as link from 'src/app/constant/links';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient){}

  getLocations(){
    return this.http.get(link.GetLocations);
  }
}
