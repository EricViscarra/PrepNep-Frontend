import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'PrepNep-Frontend';

  outputSets : String[][] = [
    //["Level set 1", "Var set 1", "Grid set 1", "Time set 1"]
  ];

  

  constructor() {
  }

  ngOnInit() {
  }

  addOutputSet() {
    this.outputSets.push(["Mandatory raob", "sonde vars", "1 x 1 regular", "Time Set 1"])
  }
}
