import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms'; // adding two way binding support.
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

// add backand support
import { BackandService } from '@backand/angular2-sdk';

@NgModule({
  declarations: [  AppComponent, HeroDetailComponent ],
  imports:      [  BrowserModule,  FormsModule ],
  providers:    [ BackandService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
