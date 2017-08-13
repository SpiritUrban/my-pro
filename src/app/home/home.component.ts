import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.less' ]
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor( private http: Http ) { }
  
  private getData() {
      return this.http.get('./assets/data/data.json')
          .map((res:Response) => res.json()); //records in this case
  }

  public myjsondata: Array<any>

  public photo_transform = 'rotate(0deg)'
  public photo_philter = 'invert(0%)'

  public stres

  public event: MouseEvent;
  public clientX = 0;
  public clientY = 0;

  public photo_event: MouseEvent;
  public photo_clientX = 0;
  public photo_clientY = 0;



  //---------------------------------- GROUP -------------------------------------

  // (mouseenter, mouseleave, on-click, on-dblclick, on-contextmenu) - events
  public onEvent(event: MouseEvent): void {
    this.event = event;
    console.log(this.event)
    console.log(this.event.type)
    //this.photo_transform = 'rotate('+event.clientX+'deg)';
  }

  // (mousemove) - event
  public coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    //console.log(this.clientY)
    //this.photo_transform = 'rotate('+ event.clientX/3 +'deg)';
  }


  //---------------------------------- GROUP -------------------------------------

  // (mouseenter, mouseleave, on-click, on-dblclick, on-contextmenu) - events
  public photo_onEvent(event: MouseEvent): void {
    this.photo_event = event;
    //console.log(this.photo_event)
    //console.log(this.photo_event.type)

    if (this.photo_event.type == 'mouseenter') this.stresFoo()
    else this.relaxFoo()

    //if (this.photo_event.type == 'mouseleave')
  }

  // (mousemove) - event
  public photo_coordinates(event: MouseEvent): void {
    this.photo_clientX = event.clientX;
    this.photo_clientY = event.clientY;
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



  public ngOnInit() {
    
  this.getData().subscribe((data) => {
    //console.log("what is in the data ", data)
    this.myjsondata = data
  })

  }

}



