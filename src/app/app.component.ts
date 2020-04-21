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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {}

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
  levelSets : LevelSet[] = [new LevelSet()];
  variableSets : VariableSet[] = [new VariableSet()];
  gridSets : GridSet[] = [new GridSet()];
  timeSets : TimeSet[] = [new TimeSet()];
  outputSets : string[][] = [];

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
        data => (data) ? this.levelSets.splice(index, 1, data) : console.log(data)
      );
    } else if (setType == this.VARIABLE) {
      dialogConfig.data = {
        numVariableSets:  this.variableSets.length,
        variableSet: Object.assign({}, this.variableSets[index])
      }
      const dialogRef = this.dialog.open(VariableSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.variableSets.splice(index, 1, data) : console.log(data)
      );
    } else if (setType == this.GRID) {
      dialogConfig.data = {
        numGridSets:  this.gridSets.length,
        gridSet: Object.assign({}, this.gridSets[index])
      }
      const dialogRef = this.dialog.open(GridSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.gridSets.splice(index, 1, data) : console.log(data)
      );
    } else if (setType == this.TIME) {
      dialogConfig.data = {
        numTimeSets:  this.timeSets.length,
        timeSet: Object.assign({}, this.timeSets[index])
      }
      const dialogRef = this.dialog.open(TimeSetComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data => (data) ? this.timeSets.splice(index, 1, data) : console.log(data)
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
      for (let i = 0; i < this.outputSets.length; i++) {
        temp.push(this.outputSets[i]);
      }
      this.outputSets = temp
      //openSuccessfulOutputSetCreation()
    } else {
      this.openErrorSnackBar("At least 1 set from each box is required to make an output set!");
    }
  }

  deleteOutputSet(index) {
    this.outputSets.splice(index, 1);
  }
  //DeleteInputSet(index) after a "are you sure" dialog

  /*
  are
  */
}