import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {DropdownModule} from 'primeng/dropdown';




@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    MenubarModule,
    DropdownModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
