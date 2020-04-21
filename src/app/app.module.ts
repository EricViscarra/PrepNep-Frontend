import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ErrorSnackBarComponent } from './error-snack-bar/error-snack-bar.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { 
  MatButtonModule,
  MatRadioModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { LevelSetComponent } from './level-set/level-set.component'
import { VariableSetComponent } from './variable-set/variable-set.component';
import { GridSetComponent } from './grid-set/grid-set.component';
import { TimeSetComponent } from './time-set/time-set.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorSnackBarComponent,
    LevelSetComponent,
    VariableSetComponent,
    TimeSetComponent,
    GridSetComponent
  ],
  entryComponents: [
    ErrorSnackBarComponent,
    LevelSetComponent,
    TimeSetComponent,
    VariableSetComponent,
    GridSetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill'} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
