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

  ngAfterViewInit() {
    this.controller = new ScrollMagic.Controller();
  
    this.logo1 = new TimelineMax({onUpdate: this.updatePercentage});

    this.logo1.from(".test2", 1, {x: 1500, opacity: 0});

    new ScrollMagic.Scene({
        triggerElement : ".sec2",
        triggerHook : "onLeave",
        duration: "100%"
      })
        .setPin(".sec2")
        .setTween(this.logo1)
        .addTo(this.controller);

        console.log(this.controller);
  }

  updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
    this.logo1.progress();
    console.log(this.logo1.progress());
  }

  

  
  // ngOnInit() {
  //   this.logo1.from(".test2", 1, {x: 200});
  // }
}
