import { Component } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  Events:Event[] = [
    {
      Name:"Bowling Tournament",
      Location: "Chirpus Bowling",
      Cost: 10.00,
      Guest: 50,
      SignedUp: 19
    },
    {
      Name:"Paint and Sip",
      Location: "Grant Art Studio",
      Cost: 25.50,
      Guest: 20,
      SignedUp: 1
    },
    {
      Name:"Nerd Convention",
      Location: "Big Venue",
      Cost: 50.00,
      Guest: 0,
      SignedUp: 0
    },
    {
      Name:"Intro to Coding",
      Location: "Virtual",
      Cost: 0,
      Guest: 0,
      SignedUp: 0
    },
    {
      Name:"Timmys Birthday",
      Location: "Rat Arcade",
      Cost: 0,
      Guest: 15,
      SignedUp: 15
    }
  ];
  ngOnInit(){
    console.log(this.Events[this.Events.length - 1]);
  }
}
