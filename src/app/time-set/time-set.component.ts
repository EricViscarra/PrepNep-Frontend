import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { ErrorSnackBarComponent } from '../error-snack-bar/error-snack-bar.component'
import { TimeSet } from '../classes/timeSet';

@Component({
  selector: 'app-time-set',
  templateUrl: './time-set.component.html',
  styleUrls: ['./time-set.component.scss']
})
export class TimeSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TimeSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.timeSet = data.timeSet;
      if (!data.timeSet) {
        this.timeSet.setName = "";
      }
  }

  timeSet: TimeSet;

  ngOnInit() {}

  onSubmit() {
    if (this.timeSet.setName && 
      this.timeSet.recordType && 
      this.timeSet.intervalType &&
      this.timeSet.start &&
      this.timeSet.step &&
      this.timeSet.last &&
      this.timeSet.timescale) {
      this.dialogRef.close(this.timeSet);
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
