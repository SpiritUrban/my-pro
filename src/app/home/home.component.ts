import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.less' ]
})
export class HomeComponent implements OnInit {

  public photo_transform = 'rotate(0deg)'
  public photo_philter = 'invert(0%)'

  public stres

  private event: MouseEvent;
  private clientX = 0;
  private clientY = 0;

  private photo_event: MouseEvent;
  private photo_clientX = 0;
  private photo_clientY = 0;

  constructor() { }


  //---------------------------------- GROUP -------------------------------------

  // (mouseenter, mouseleave, on-click, on-dblclick, on-contextmenu) - events
  private onEvent(event: MouseEvent): void {
    this.event = event;
    console.log(this.event)
    console.log(this.event.type)
    //this.photo_transform = 'rotate('+event.clientX+'deg)';
  }

  // (mousemove) - event
  private coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    //console.log(this.clientY)
    //this.photo_transform = 'rotate('+ event.clientX/3 +'deg)';
  }


  //---------------------------------- GROUP -------------------------------------

  // (mouseenter, mouseleave, on-click, on-dblclick, on-contextmenu) - events
  private photo_onEvent(event: MouseEvent): void {
    this.photo_event = event;
    console.log(this.photo_event)
    console.log(this.photo_event.type)

    if (this.photo_event.type == 'mouseenter') this.stresFoo()
    else this.relaxFoo()

    //if (this.photo_event.type == 'mouseleave')
  }

  private stresFoo(): void {
    this.photo_philter = 'invert(100%)'
    //
    this.stres = setInterval(() => {
      this.photo_transform = 'rotate(10deg)'
      setTimeout(() => {
        this.photo_transform = 'rotate(0deg)'
      }, 20)
    }, 100);
  }

  private relaxFoo(): void {
    clearInterval(this.stres)
    this.photo_transform = 'rotate(0deg)'
    this.photo_philter = 'invert(0%)'
  }

  // (mousemove) - event
  private photo_coordinates(event: MouseEvent): void {
    this.photo_clientX = event.clientX;
    this.photo_clientY = event.clientY;
  }

  public ngOnInit() {
    console.log(1)
  }
}
