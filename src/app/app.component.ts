import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';//app ngay day ne
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.componentHeadTrangChu.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: MenuItem[];
  cities1: SelectItem[];
  show=false;
  showTitle()
  {
    this.show=true;
  }
  ngOnInit() {
    this.items = [
        {
            label: 'File',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Quan ly',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Đăng nhập', icon: 'pi pi-fw pi-trash'},
                {label: 'Dang ky', icon: 'pi pi-fw pi-refresh'}
            ]
        }
    ];
    this.cities1 = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];
   
   
    

}

}
