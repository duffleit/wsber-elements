import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserWidgetModule } from './elements/user-widget/user-widget.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserWidgetModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
