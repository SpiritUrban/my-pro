import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
//import { WindowRef } from '../../services/window.service';

@Component({
  selector: 'space-battle',
  templateUrl: './space-battle.component.html',
  styleUrls: ['./space-battle.component.less']
})


export class SpaceBattleComponent implements OnInit {

  public img_ship = 'assets/games/space-battle/space-ship.svg';
  public img_roket = 'assets/games/space-battle/roket.png';
  public ship_position = '50%'
  public rokets_shoot = []
  public rokets_counter: number = 0

  public event: MouseEvent;
  public clientX = 0;
  public clientY = 0;

  // (mouseenter, mouseleave, on-click, on-dblclick, on-contextmenu) - events
  public onEvent(event: MouseEvent): void {
    this.event = event;
    console.log(this.event)
    console.log(this.event.type)

    if (this.event.type == 'click') {
      this.rokets_counter++
      this.rokets_shoot.push({
        number: this.rokets_counter,
        start: this.ship_position,
        bottom: 7
      })
      this.run_fly(this.rokets_counter)
    }
  }

  // (mousemove) - event
  public coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    //console.log(this.clientY)
    this.ship_position = event.clientX + 'px';
  }

  public run_fly(roket) {
    console.log(roket)
    let numberStert = setInterval(() => {
      roket.bottom++
      console.log(roket.bottom)
    }, 1000)

    if (roket.bottom > 100) clearInterval(numberStert)
    return roket.bottom + 'rem'
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

