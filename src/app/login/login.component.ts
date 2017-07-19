import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.less' ]
})
export class LoginComponent implements OnInit {


  constructor() { }

  public ngOnInit() {
    console.log(1)
  }

  x() {
    alert()
  }

}
