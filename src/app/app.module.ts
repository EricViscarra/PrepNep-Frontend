import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ErrorSnackBarComponent } from './error-snack-bar/error-snack-bar.component'
import { LevelSetComponent } from './level-set/level-set.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { 
  MatButtonModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { VariableSetComponent } from './variable-set/variable-set.component';
import { GridSetComponent } from './grid-set/grid-set.component';
import { TimeSetComponent } from './time-set/time-set.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorSnackBarComponent,
    LevelSetComponent,
    VariableSetComponent,
    GridSetComponent,
    TimeSetComponent
  ],
  entryComponents: [
    ErrorSnackBarComponent,
    LevelSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
