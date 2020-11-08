import { HttpClient } from '@angular/common/http';
 // from app.module.ts, 2nd step making http call to backened api to fetch data
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = 'http://localhost:3000/api/events';
  private _specialEventsUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient) { } // inject http here
  // methods here created to fetch regular and special events 
  //goto events||special-events.components.ts subscribe the observable and respective components
  getEvents(){
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl)
  }
}
//go to events.component.ts there import and inject the events service 