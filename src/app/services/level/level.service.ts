import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as link from 'src/app/constant/links';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  getLevels(){
    return this.http.get(link.GetLevels);
  }
}
