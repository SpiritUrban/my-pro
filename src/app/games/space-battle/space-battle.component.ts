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
  public img_chimera = 'assets/games/space-battle/chimera.png';
  public ship_position = '50%';
  public rokets_shoot = [];
  public rokets_counter: number = 0;
  public points: number = 0;
  public spoil: number = 0;

  public event: MouseEvent;
  public clientX = 0;
  public clientY = 0;

  public chimeras = [];
  public chimeras_counter: number = 0;

  public clientWidth = document.body.clientWidth;


  public audio = new Audio();


    constructor(
    // private winRef: WindowRef
  ) {
    // winRef.nativeWindow.onmousemove = this.onmousemove
  }

    // (mousemove) - event
  public coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    // console.log(this.clientY)
    this.ship_position = event.clientX + 'px';
  }

  // (mouseenter, mouseleave, on-click, on-dblclick, on-contextmenu) - events
  public onEvent(event: MouseEvent): void {
    this.event = event;
    console.log(this.event)
    console.log(this.event.type)

    if (this.event.type == 'click') this.ship_shoot()
  }

  public ship_shoot() {
      // Shot sound
      this.audio.src = 'assets/games/sounds/Explosion18.ogg';
      this.audio.load();
      this.audio.play();
      //
      this.rokets_counter++
      this.rokets_shoot.push({
        number: this.rokets_counter,
        start: this.ship_position,
        bottom: 21
      })
      this.run_fly(this.rokets_counter)
      //
      // Change aim
      //this.chimeras.pop()
      console.log(this.spape_position_percent())


      this.chimeras.map((chimera) => {
          chimera.position.y = this.persent_to_number(chimera.position.y) - 1 + '%'

          console.log(this.persent_to_number(chimera.position.x))

          if (
            ( this.spape_position_percent() < this.persent_to_number(chimera.position.x) + 3 ) &&
            ( this.spape_position_percent() > this.persent_to_number(chimera.position.x) - 3 )
          ) {
            // chimera.position.x = '50%'
            chimera.position.y = '-30%'
            chimera.position.x = this.random(30)+'%'
            chimera.opacity = '0'
            // chimera.display = 'none'
            chimera.img = 'assets/games/space-battle/snot.png'
            setTimeout(() => {
              chimera.img = ''
            }, 500)
            chimera.width = '0%'
            // chimera.position.x = (this.persent_to_number(chimera.position.x) - 30) + '%'
            this.points++
          }

      })
  }


  public run_fly(roket) {
    setTimeout(() => {
      if (roket.bottom) roket.bottom++
      if (roket.bottom > 100) this.rokets_shoot.pop()
    }, 70)
    return roket.bottom + '%'
  }


  public birth_of_a_chimera() {
    this.chimeras_counter++
    //
    if (this.chimeras.length < 10) {
      this.chimeras.push({
          number: this.chimeras_counter,
          name: 'Chimera-'+this.chimeras_counter,
          position: { x: this.random(10)+'%', y: '-10%'},
          width: '8%',
          top: 21
      })
    }
    console.log('birth_of_a_chimera')
    console.log(this.chimeras)
  }


  public chimera_cicle() {
    setInterval(() => {
      this.birth_of_a_chimera()
    }, 5000)

    setInterval(() => {
      this.chimeras.map((chimera) => {
        chimera.position.x = this.persent_to_number(chimera.position.x) + this.random_pluss() + '%'
        chimera.position.y = this.persent_to_number(chimera.position.y) + this.random_pluss() + 3  + '%'
        chimera.opacity = '.7'
        setTimeout(() => {
          chimera.width = '8%'
          //chimera.position.x = ( this.persent_to_number(chimera.position.x) + 10 ) + '%'
          setTimeout(() => {
            chimera.img = 'assets/games/space-battle/chimera.png'
          }, 1000)
        }, 1000);
        
        //chimera.display = 'block'

        if (this.persent_to_number(chimera.position.y) > 120 ) {
          chimera.position ={ x: this.random(10)+'%', y: '-100%'}
          this.spoil++
        }
        if ( this.persent_to_number(chimera.position.x) < 5 ) chimera.position.x = '15%' // 
        if ( this.persent_to_number(chimera.position.x) > 90 ) chimera.position.x = '80%' // 
        //console.log(chimera.position.x)

      })


    }, 300)


  }


  public ngOnInit() {
    console.log('space-battle')
    this.chimera_cicle()
  }

  // Util
  private persent_to_number(persent) {
    persent = persent.slice(0, persent.length-1)
    return  persent = parseInt(persent)
  }

  private random_pluss(){
    return Math.random() * 2
  }

  private random(x){
    return Math.random() * x
  }

  private spape_position_percent () {
    return Math.round(this.event.clientX /  (this.clientWidth / 100))
  }

/*
  mouseMove(event) {
    event.preventDefault();
    console.log(event)
  }
*/
  /*
    this.onmousemove = function (e) {
      cursorX = e.pageX;
      cursorY = e.pageY;
    }*/
}

