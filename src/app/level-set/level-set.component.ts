import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-level-set',
  templateUrl: './level-set.component.html',
  styleUrls: ['./level-set.component.scss']
})
export class LevelSetComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LevelSetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
  } 


}
