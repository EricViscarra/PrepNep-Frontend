import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'PrepNep-Frontend';

  pickedLevelSet : string;
  pickedVarSet : string;
  pickedGridSet : string;
  pickedTimeSet : string;
  levelSets : String[] = ["Level Set 1", "Level Set 2", "Level Set 3"];
  varSets : String[] = ["Var Set 1", "Var Set 2", "Var Set 3"];
  gridSets : String[] = ["Grid Set 1", "Grid Set 2", "Grid Set 3", "Grid Set 4"];
  timeSets : String[] = ["Time Set 1", "Time Set 2", "Time Set 3"];
  outputSets : String[][] = [];

  openDialog(): void {/*
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    */
  }

  

  constructor() {
  }

  ngOnInit() {
  }

  addOutputSet(levelSet, varSet, gridSet, timeSet) {
    this.outputSets.push([levelSet, varSet, gridSet, timeSet])
  }
}