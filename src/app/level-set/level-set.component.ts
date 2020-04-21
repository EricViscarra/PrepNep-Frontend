import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { ErrorSnackBarComponent } from '../error-snack-bar/error-snack-bar.component'
import { LevelSet } from '../classes/levelSet';


@Component({
  selector: 'app-level-set',
  templateUrl: './level-set.component.html',
  styleUrls: ['./level-set.component.scss']
})
export class LevelSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LevelSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.levelSet = data.levelSet;
      if (data.levelSet.pressures) {
        this.numPressures = this.levelSet.pressures.length;
      } else {
        this.levelSet.pressures = [];
      }
  }

  Arr = Array;
  numPressures: number = 1;
  levelSet: LevelSet;
  pressuresValid: boolean;

  ngOnInit() {}

  addPressure() {
    this.numPressures++;
    this.levelSet.pressures.push();
  }

  deletePressure(index) {
    this.numPressures--;
    this.levelSet.pressures.splice(index, 1);

  }

  onSubmit() {
    var valid;
    if (this.levelSet.recordType == 'pressure' && this.levelSet.intervalType == 'points') {
      valid = (this.numPressures == this.levelSet.pressures.length) && 
      !this.levelSet.pressures.includes(null) &&
      !this.levelSet.pressures.includes(undefined);
    } else if (this.levelSet.recordType == 'height' && this.levelSet.intervalType == 'rule') {
      valid = (this.levelSet.start && this.levelSet.step && this.levelSet.last);
    } else {
      valid = false;
      console.log("Level set not correctly set.");
    }
    var validRule = (this.levelSet.start && this.levelSet.step && this.levelSet.last);
    if (this.levelSet.setName && valid) {
      this.dialogRef.close(this.levelSet);
    } else {
      this.openErrorSnackBar("Fill out all of the required fields! *");
    }
  } 

  onCancel() {
    this.dialogRef.close();
  }

  openErrorSnackBar(msg) {
    this.snackBar.openFromComponent(ErrorSnackBarComponent, 
      {
        duration: 4000,
        panelClass: ['error-snackbar'],
        data: msg
      });
  }

}
