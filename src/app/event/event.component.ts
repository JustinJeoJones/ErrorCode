import { Component, Input } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() DisplayEvent = {} as Event;

  ngOnInit(){
    console.log(this.DisplayEvent);
  }
  ProgressBar(){
    return (this.DisplayEvent.SignedUp / this.DisplayEvent.Guest) * 100 + "%";
  }
  
}
