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

  public audio = new Audio();


    constructor(
    //private winRef: WindowRef
  ) {
    //winRef.nativeWindow.onmousemove = this.onmousemove
  }

  // (mouseenter, mouseleave, on-click, on-dblclick, on-contextmenu) - events
  public onEvent(event: MouseEvent): void {
    this.event = event;
    console.log(this.event)
    console.log(this.event.type)



    if (this.event.type == 'click') {
      // Shot sound
      this.audio.src = "assets/games/sounds/Explosion18.ogg";
      this.audio.load();
      this.audio.play();
      //
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
    setTimeout(() => {
      console.log(roket)
      roket.bottom++
      if (roket.bottom > 50) this.rokets_shoot.pop()
    }, 70)
    return roket.bottom + 'rem'
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

