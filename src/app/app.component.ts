import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatDialog,
  MatDialogConfig
} from '@angular/material'
import { ErrorSnackBarComponent } from './error-snack-bar/error-snack-bar.component'
import { LevelSetComponent } from './level-set/level-set.component'
import { VariableSetComponent } from './variable-set/variable-set.component';
import { GridSetComponent } from './grid-set/grid-set.component';
import { TimeSetComponent } from './time-set/time-set.component';
import { LevelSet } from './classes/levelSet';
import { VariableSet } from './classes/variableSet';
import { GridSet } from './classes/gridSet';
import { TimeSet } from './classes/timeSet';
declare function exportFilej(setNames, sets): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    var ls1 = new LevelSet();
    ls1.setName = "Level Set 1";
    ls1.recordType = "pressure";
    ls1.intervalType = "points";
    ls1.pressures = [100, 200, 300];
    this.levelSets.push(ls1);
    var ls2 = new LevelSet();
    ls2.setName = "Level Set 2";
    ls2.recordType = "height";
    ls2.intervalType = "rule";
    ls2.start = 0;
    ls2.step = 500;
    ls2.last = 5000;
    this.levelSets.push(ls2);
    var vs1 = new VariableSet();
    vs1.setName = "Variable Set 1";
    vs1.recordType = "varset";
    vs1.variables = ["u", "v", "w", "temperature"];
    this.variableSets.push(vs1);
    var vs2 = new VariableSet();
    vs2.setName = "Variable Set 2";
    vs2.recordType = "varset";
    vs2.variables = ["u", "v", "heights", "totprep"];
    this.variableSets.push(vs2);
    var gs1 = new GridSet();
    gs1.setName = "Grid Set 1";
    gs1.recordType = "grid";
    gs1.gridType = "latlon";
    gs1.spacing = 1;
    this.gridSets.push(gs1);
    var ts1 = new TimeSet();
    ts1.setName = "Time Set 1";
    ts1.recordType = "time";
    ts1.intervalType = "rule";
    ts1.start = 0;
    ts1.step = 15;
    ts1.last = 3600;
    ts1.timescale = 60;
    this.timeSets.push(ts1);
    var ts2 = new TimeSet();
    ts2.setName = "Time Set 2";
    ts2.recordType = "time";
    ts2.intervalType = "rule";
    ts2.start = 0;
    ts2.step = 3;
    ts2.last = 120;
    ts2.timescale = 3600;
    this.timeSets.push(ts2);
  }

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  title = 'PrepNep-Frontend';

  nop: number;
  nel_xy: number;
  nel_z: number;
  delta_t: number;
  physics: string;


  LEVEL: string = "Level";
  VARIABLE: string = "Variable";
  GRID: string = "Grid";
  TIME: string = "Time";

  pickedLevelSet : LevelSet = null;
  pickedVariableSet : VariableSet = null;
  pickedGridSet : GridSet = null;
  pickedTimeSet : TimeSet = null;
  levelSets : LevelSet[] = [];
  variableSets : VariableSet[] = [];
  gridSets : GridSet[] = [];
  timeSets : TimeSet[] = [];
  outputSets : string[][] = [];
  outputName : String[][] = [];

  createInputSet(setType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //save form depending on type of form, all are almost basically the same
    if (setType == this.LEVEL) {
      dialogConfig.data = {
        numLevelSets:  this.levelSets.length,
        levelSet: new LevelSet()
      }
      const dialogRef = this.dialog.open(LevelSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.levelSets.push(data) : console.log("Form cancelled.")
      );
    } else if (setType == this.VARIABLE) {
      dialogConfig.data = {
        numVariableSets:  this.variableSets.length,
        variableSet: new VariableSet()
      }
      const dialogRef = this.dialog.open(VariableSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.variableSets.push(data) : console.log("Form cancelled.")
      );
    } else if (setType == this.GRID) {
      dialogConfig.data = {
        numGridSets:  this.gridSets.length,
        gridSet: new GridSet()
      }
      const dialogRef = this.dialog.open(GridSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.gridSets.push(data) : console.log("Form cancelled.")
      );
    } else if (setType == this.TIME) {
      dialogConfig.data = {
        numTimeSets:  this.timeSets.length,
        timeSet: new TimeSet()
      }
      const dialogRef = this.dialog.open(TimeSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.timeSets.push(data) : console.log("Form cancelled.")
      );
    } else {
      console.log("That input set type does not exist!")
    }
  }

  editInputSet(setType, index) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //save form depending on type of form
    if (setType == this.LEVEL) {
      dialogConfig.data = {
        numLevelSets:  this.levelSets.length,
        levelSet: Object.assign({}, this.levelSets[index])
      }
      const dialogRef = this.dialog.open(LevelSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.levelSets.splice(index, 1, data) : console.log("Form cancelled.")
      );
    } else if (setType == this.VARIABLE) {
      dialogConfig.data = {
        numVariableSets:  this.variableSets.length,
        variableSet: Object.assign({}, this.variableSets[index])
      }
      const dialogRef = this.dialog.open(VariableSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.variableSets.splice(index, 1, data) : console.log("Form cancelled.")
      );
    } else if (setType == this.GRID) {
      dialogConfig.data = {
        numGridSets:  this.gridSets.length,
        gridSet: Object.assign({}, this.gridSets[index])
      }
      const dialogRef = this.dialog.open(GridSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.gridSets.splice(index, 1, data) : console.log("Form cancelled.")
      );
    } else if (setType == this.TIME) {
      dialogConfig.data = {
        numTimeSets:  this.timeSets.length,
        timeSet: Object.assign({}, this.timeSets[index])
      }
      const dialogRef = this.dialog.open(TimeSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.timeSets.splice(index, 1, data) : console.log("Form cancelled.")
      );
    } else {
      console.log("That input set type does not exist!")
    }
  }

  deleteInputSet(setType, index) {
    if (setType == "Level") {
      this.levelSets.splice(index, 1);
    } else if (setType =="Variable") {
      this.variableSets.splice(index, 1);
    } else if (setType == "Grid") {
      this.gridSets.splice(index, 1);
    } else if (setType == "Time") {
      this.timeSets.splice(index, 1);
    } else {
      console.log("That input set type does not exist!")
    }
  }

  openErrorSnackBar(msg) {
    this.snackBar.openFromComponent(ErrorSnackBarComponent,
      {
        duration: 4000,
        panelClass: ['error-snackbar'],
        data: msg
      });
  }

  addOutputSet(levelSet, variableSet, gridSet, timeSet) {
    if (levelSet && variableSet && gridSet && timeSet) {
      let temp = [[levelSet, variableSet, gridSet, timeSet]]
      //duplicate made in proper order for export
      let tempnamesave = [[gridSet.setName,timeSet.setName,variableSet.setName,levelSet.setName]]
      for (let i = 0; i < this.outputSets.length; i++) {
        temp.push(this.outputSets[i]);
        //duplicate pushed
        tempnamesave.push(this.outputName[i])
      }
      this.outputSets = temp
      //openSuccessfulOutputSetCreation()
      //duplicate saved
      this.outputName = tempnamesave;
    } else {
      this.openErrorSnackBar("At least 1 set from each box is required to make an output set!");
    }
  }

  exportFile(){
    exportFilej(this.outputName, this.outputSets);
  }

  deleteOutputSet(index) {
    this.outputSets.splice(index, 1);
    this.outputName.splice(index,1);
  }
  //DeleteInputSet(index) after a "are you sure" dialog

  /*
  are
  */
}
