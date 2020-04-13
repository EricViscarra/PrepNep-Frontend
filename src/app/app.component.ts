import { Component, OnInit } from '@angular/core';
import { 
  MatSnackBar,
  MatDialog,
  MatDialogConfig,
  MatDialogRef
} from '@angular/material'
import { ErrorSnackBarComponent } from './error-snack-bar/error-snack-bar.component'
import { LevelSetComponent } from './level-set/level-set.component'
import { VariableSetComponent } from './variable-set/variable-set.component';
import { GridSetComponent } from './grid-set/grid-set.component';
import { TimeSetComponent } from './time-set/time-set.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private snackBar: MatSnackBar,
    private dialog: MatDialog) {}

  title = 'PrepNep-Frontend';

  pickedLevelSet : string = null;
  pickedVariableSet : string = null;
  pickedGridSet : string = null;
  pickedTimeSet : string = null;
  levelSets : String[] = ["Level Set 1", "Level Set 2", "Level Set 3"];
  variableSets : String[] = ["Var Set 1", "Var Set 2", "Var Set 3"];
  gridSets : String[] = ["Grid Set 1", "Grid Set 2", "Grid Set 3", "Grid Set 4"];
  timeSets : String[] = ["Time Set 1", "Time Set 2", "Time Set 3"];
  outputSets : String[][] = [];

  createInputSet(setType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if (setType == "Level") {
      dialogConfig.data = {
        numLevelSets:  this.levelSets.length
      }
      this.dialog.open(LevelSetComponent, dialogConfig);
    } else if (setType =="Variable") {
      this.dialog.open(VariableSetComponent, dialogConfig);
    } else if (setType == "Grid") {
      this.dialog.open(GridSetComponent, dialogConfig);
    } else if (setType == "Time") {
      this.dialog.open(TimeSetComponent, dialogConfig);
    }
  }

  //Probably doesnt need to exist, just need to make delete - button next them.
  deleteInputSet(setType) {
    if (setType == "Level") {
    } else if (setType =="Variable") {
    } else if (setType == "Grid") {
    } else if (setType == "Time") {
    }
  }

  openErrorSnackBar() {
    this.snackBar.openFromComponent(ErrorSnackBarComponent, 
      {
        duration: 4000,
        panelClass: ['error-snackbar']
      });
  }

  addOutputSet(levelSet, variableSet, gridSet, timeSet) {
    if (levelSet && variableSet && gridSet && timeSet) {
      let temp = [[levelSet, variableSet, gridSet, timeSet]]
      for (let i = 0; i < this.outputSets.length; i++) {
        temp.push(this.outputSets[i]);
      }
      this.outputSets = temp
    } else {
      this.openErrorSnackBar();
    }
  }

  deleteOutputSet(index) {
    this.outputSets.splice(index, 1);
  }
}