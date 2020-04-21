import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, } from '@angular/material';
import { ErrorSnackBarComponent } from '../error-snack-bar/error-snack-bar.component'
import { VariableSet } from '../classes/variableSet';


@Component({
  selector: 'app-variable-set',
  templateUrl: './variable-set.component.html',
  styleUrls: ['./variable-set.component.scss']
})
export class VariableSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<VariableSetComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.variableSet = data.variableSet;
      if (data.variableSet.variables) {
        this.numVariables = this.variableSet.variables.length;
      } else {
        this.variableSet.variables = [];
      }
  }

  Arr = Array;
  numVariables: number = 1;
  variableSet: VariableSet;
  variablesValid: boolean;

  ngOnInit() {}

  addVariable() {
    this.numVariables++;
    this.variableSet.variables.push();
  }

  deleteVariable(index) {
    this.numVariables--;
    this.variableSet.variables.splice(index, 1);

  }

  onSubmit() {
    var validVariables = (this.numVariables == this.variableSet.variables.length) && !this.variableSet.variables.includes(undefined);
    if (this.variableSet.setName && 
      this.variableSet.recordType &&
      validVariables) {
      this.dialogRef.close(this.variableSet);
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
