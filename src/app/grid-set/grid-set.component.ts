import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { ErrorSnackBarComponent } from '../error-snack-bar/error-snack-bar.component'
import { GridSet } from '../classes/gridSet';

@Component({
  selector: 'app-grid-set',
  templateUrl: './grid-set.component.html',
  styleUrls: ['./grid-set.component.scss']
})
export class GridSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<GridSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.gridSet = data.gridSet;
      if (!this.gridSet) {
        this.gridSet.setName = "";
      }
  }

  gridSet: GridSet;

  ngOnInit() {}

  onSubmit() {
    if (this.gridSet.setName && 
      this.gridSet.recordType && 
      this.gridSet.gridType &&
      this.gridSet.spacing) {
      this.dialogRef.close(this.gridSet);
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
