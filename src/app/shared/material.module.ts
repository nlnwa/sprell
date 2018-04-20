import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatDividerModule,
} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatMomentDateModule} from '@angular/material-moment-adapter';

const modules = [
  FlexLayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatDividerModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
