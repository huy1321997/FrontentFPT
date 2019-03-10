import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  levels: any;
  locations: any;
  searchForm: any;

  constructor(private appService: AppService,
    ) {
      this.searchForm = new FormGroup({
        skill: new FormControl(''),
        location: new FormControl(''),
        level: new FormControl('')
      });
     }

  ngOnInit() {
    // this.appService.getLocations().subscribe(data => this.locations = data);
    this.locations = ['a', 'b'];
    this.appService.getLevels().subscribe(data => this.levels = data);
  }

  onSearch = () => {
    console.log(this.searchForm.value);
  }

}
