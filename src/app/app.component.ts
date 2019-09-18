import { Component } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';
import { ScrollMagic } from 'scrollmagic';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  controller = new ScrollMagic.Controller();
  
  logo1 = new TimelineMax({repeat:-1, repeatDelay:1});

  scene = new ScrollMagic({
    triggerElement : "sec2",
    triggerHook : "onLeave",
    duration: "100%"
  })
    .setPin("sec2")
    .setTween(this.logo1)
    .addTo(this.controller);
  // ngOnInit() {
  //   this.logo1.from(".test2", 1, {x: 200});
  // }
}
