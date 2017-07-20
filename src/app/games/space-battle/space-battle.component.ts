import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
//import { WindowRef } from '../../services/window.service';

@Component({
  selector: 'space-battle',
  templateUrl: './space-battle.component.html',
  styleUrls: ['./space-battle.component.less']
})


export class SpaceBattleComponent implements OnInit {

  public angularclassLogo = 'assets/games/space-battle/space-ship.svg';
  public ship_position = '50%'

  public event: MouseEvent;
  public clientX = 0;
  public clientY = 0;

  // (mouseenter, mouseleave, on-click, on-dblclick, on-contextmenu) - events
  public onEvent(event: MouseEvent): void {
    this.event = event;
    console.log(this.event)
    console.log(this.event.type)
  }

  // (mousemove) - event
  public coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    //console.log(this.clientY)
    this.ship_position = event.clientX + 'px';
  }



  constructor(
    //private winRef: WindowRef
  ) {
    //winRef.nativeWindow.onmousemove = this.onmousemove
  }

  public ngOnInit() {
    console.log('space-battle')
  }

  mouseMove(event) {
    event.preventDefault();
    console.log(event)
  }

  /*
    this.onmousemove = function (e) {
      cursorX = e.pageX;
      cursorY = e.pageY;
    }*/
}

