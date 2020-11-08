import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    RegisterComponent,
    
    LoginComponent,
    SpecialEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule
    
  ],
  providers: [AuthService, AuthGuard, EventService],// first step add Service here then go to service ts file 
  bootstrap: [AppComponent] //
})
export class AppModule { }
