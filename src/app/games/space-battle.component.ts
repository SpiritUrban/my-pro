import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'space-battle',
  templateUrl: './space-battle.component.html',
  styleUrls: [ './space-battle.component.less' ]
})
export class SpaceBattleComponent implements OnInit {

  public angularclassLogo = 'assets/games/space-battle/space-ship.svg';

  constructor() { }

  public ngOnInit() {
    console.log('space-battle')
  }
}

