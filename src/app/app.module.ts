import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// add backand support
import { BackandService } from '@backand/angular2-sdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ BackandService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


