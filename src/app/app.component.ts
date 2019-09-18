import { Component } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';
declare let ScrollMagic: any

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  controller;
  logo1;
  scene;

  ngOnInit() {
    this.controller = new ScrollMagic.Controller();
  
    this.logo1 = new TimelineMax({repeat:-1, repeatDelay:1});

    this.logo1.from(".test2", 1, {x: 1500, opacity: 0});

    this.scene = new ScrollMagic({
        triggerElement : "sec2",
        triggerHook : "onLeave",
        duration: "100%"
      })
        .setPin("sec2")
        .setTween(this.logo1)
        .addTo(this.controller);
  }

  

  
  // ngOnInit() {
  //   this.logo1.from(".test2", 1, {x: 200});
  // }
}
