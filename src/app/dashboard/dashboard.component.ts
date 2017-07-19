import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  constructor(/*private heroService: HeroService*/) { }

  public ngOnInit() {
    console.log(1)
  }
}
