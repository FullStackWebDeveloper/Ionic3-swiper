import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  public config: Object;
  
  @ViewChild(Slides) private slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  public ngOnInit() {
    this.slides.effect = 'coverflow';
    this.slides.centeredSlides = true;
    this.slides.slidesPerView = 'auto';
    this.slides.spaceBetween = '10%';
    this.slides.loop = true;
    this.slides.coverflow = {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0,
      slideShadows: true,
    }
  }

}
