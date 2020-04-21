import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material'
import { TestBed } from '@angular/core/testing';

declare function exportFilej(sets): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'PrepNep-Frontend';

  pickedLevelSet : string = null;
  pickedVarSet : string = null;
  pickedGridSet : string = null;
  pickedTimeSet : string = null;
  levelSets : String[] = ["Level Set 1", "Level Set 2", "Level Set 3"];
  varSets : String[] = ["Var Set 1", "Var Set 2", "Var Set 3"];
  gridSets : String[] = ["Grid Set 1", "Grid Set 2", "Grid Set 3", "Grid Set 4"];
  timeSets : String[] = ["Time Set 1", "Time Set 2", "Time Set 3"];
  outputSets : String[][] = [];
  outputordered : String[][] = [];

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

  //levelstore: string[];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  openErrorSnackBar() {
    this.snackBar.openFromComponent(ErrorSnackBarComponent, {duration: 4000})
  }

  addOutputSet(levelSet, varSet, gridSet, timeSet) {
    if (levelSet && varSet && gridSet && timeSet) {
      let temp = [[levelSet, varSet, gridSet, timeSet]]
      //duplicate made in proper order for export
      let tempsave = [[gridSet,timeSet,varSet,levelSet]]
      for (let i = 0; i < this.outputSets.length; i++) {
        temp.push(this.outputSets[i]);
        //duplicate pushed
        tempsave.push(this.outputordered[i])
      }
      this.outputSets = temp
      //duplicate saved
      this.outputordered = tempsave;
    } else {
      this.openErrorSnackBar();
    }
  }

  exportFile(){
    exportFilej(this.outputordered);
  }

  deleteOutputSet(index) {
    this.outputSets.splice(index, 1);
  }
}

@Component({
  selector: 'error-snack-bar',
  templateUrl: 'dialog-templates/error-snack-bar.html',
  styles: [`
    .error-text {
      color: yellow;
    }
  `],
})
export class ErrorSnackBarComponent {}