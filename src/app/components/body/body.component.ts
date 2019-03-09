import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { LevelService } from 'src/app/services/level/level.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  levels : any;
  locations: any;

  constructor(private locationService: LocationService,
    private levelService: LevelService
    ) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(data => this.locations = data);
    this.levelService.getLevels().subscribe(data => this.levels = data);
  }

}
